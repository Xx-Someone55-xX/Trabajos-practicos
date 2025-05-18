document.querySelectorAll('.btn-copy').forEach(button => {
    button.addEventListener('click', async function() {
        const codeBlock = this.closest('.code-box').querySelector('code');
        const textToCopy = codeBlock.innerText;
        const originalText = this.querySelector('span').textContent;
        
        try {
            await navigator.clipboard.writeText(textToCopy);
            
            // Cambiar a estado copiado
            this.classList.add('copied');
            this.querySelector('.copy-icon').style.display = 'none';
            this.querySelector('.check-icon').style.display = 'block';
            this.querySelector('span').textContent = '¡Copiado!';
            
            // Resetear después de 2 segundos
            setTimeout(() => {
                this.classList.remove('copied');
                this.querySelector('.copy-icon').style.display = 'block';
                this.querySelector('.check-icon').style.display = 'none';
                this.querySelector('span').textContent = originalText;
            }, 2000);
            
        } catch (err) {
            console.error('Error al copiar:', err);
            this.querySelector('span').textContent = 'Error';
            setTimeout(() => {
                this.querySelector('span').textContent = originalText;
            }, 2000);
        }
    });
});