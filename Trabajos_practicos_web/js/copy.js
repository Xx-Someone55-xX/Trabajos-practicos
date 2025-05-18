document.querySelectorAll('.btn-copy').forEach(button => {
    button.addEventListener('click', async function() {
        const code = this.closest('.code-box').querySelector('code').innerText;
        
        try {
            await navigator.clipboard.writeText(code);
            
            // Forzar cambio visual
            this.classList.add('copied');
            this.style.backgroundColor = '#10b981';
            
            setTimeout(() => {
                this.classList.remove('copied');
                this.style.backgroundColor = '';
            }, 1000);
            
        } catch (err) {
            console.error('Error:', err);
            this.style.backgroundColor = '#ef4444';
            setTimeout(() => this.style.backgroundColor = '', 1000);
        }
    });
});