document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-btn');
    const html = document.documentElement;

    // Función para actualizar el ícono
    const updateIcon = () => {
        themeToggle.textContent = html.getAttribute('data-theme') === 'dark' ? '🌙' : '☀️';
    };

    // Cargar tema guardado o usar preferencia del sistema
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    
    html.setAttribute('data-theme', initialTheme);
    updateIcon();

    // Cambiar tema
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Actualizar tema y almacenamiento
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Animación y actualización de ícono
        themeToggle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 100);
        updateIcon();
    });
});