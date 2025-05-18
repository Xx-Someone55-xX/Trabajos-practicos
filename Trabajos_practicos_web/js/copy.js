document.querySelectorAll('.btn-copy').forEach(button => {
    button.addEventListener('click', async function() {
        try {
            // Código para copiar...
            this.classList.add('copied');
            setTimeout(() => this.classList.remove('copied'), 2000);
        } catch (err) {
            this.classList.add('error');
            setTimeout(() => this.classList.remove('error'), 2000);
        }
    });
});