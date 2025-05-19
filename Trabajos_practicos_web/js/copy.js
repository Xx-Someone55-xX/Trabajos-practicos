document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn-copy').forEach(button => {
        button.addEventListener('click', async function() {
        const code = this.closest('.code-box').querySelector('code').innerText;
        const copyIcon = this.querySelector('.copy-icon');
        const checkIcon = this.querySelector('.check-icon');
        
      try {
    await navigator.clipboard.writeText(code);
    
    this.classList.add('copied');
    
    // Forzar actualización de estilos
    void this.offsetWidth;
    
    setTimeout(() => {
        this.classList.remove('copied');
    }, 2000);
    
} catch (err)  {
            console.error('Error:', err);
            this.style.backgroundColor = '#ef4444';
            setTimeout(() => this.style.backgroundColor = '', 2000);
        }
    });
    });
});