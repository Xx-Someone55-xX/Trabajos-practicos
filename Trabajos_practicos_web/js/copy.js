document.querySelectorAll('.btn-copy').forEach(button => {
    button.addEventListener('click', async function() {
        const code = this.closest('.code-box').querySelector('code').innerText;
        const copyIcon = this.querySelector('.copy-icon');
        const checkIcon = this.querySelector('.check-icon');
        const span = this.querySelector('span');
        
        try {
            await navigator.clipboard.writeText(code);
            this.classList.add('copied');
            copyIcon.style.display = 'none';
            checkIcon.style.display = 'block';
            span.textContent = '¡Copiado!';
            
            setTimeout(() => {
                this.classList.remove('copied');
                copyIcon.style.display = 'block';
                checkIcon.style.display = 'none';
                span.textContent = 'Copiar';
            }, 2000);
            
        } catch (err) {
            console.error('Error al copiar:', err);
            span.textContent = 'Error';
            setTimeout(() => span.textContent = 'Copiar', 2000);
        }
    });
});