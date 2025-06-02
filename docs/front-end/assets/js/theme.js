document.addEventListener('DOMContentLoaded', () => {
    // Configuración del tema
    const themeToggle = document.querySelector('.theme-btn');
    const html = document.documentElement;
    const themeKey = 'tp-theme'; // Key única para localStorage

    // Sistema de iconos SVG
    const themeIcons = {
        sun: `<svg aria-hidden="true" class="theme-icon" width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.5 4.9l1.4 1.4-2.1 2.1-1.4-1.4 2.1-2.1zm14.2 14.2 1.4 1.4-2.1 2.1-1.4-1.4 2.1-2.1zm-14.2 0 2.1-2.1 1.4 1.4-2.1 2.1-1.4-1.4zm14.2-14.2 2.1-2.1 1.4 1.4-2.1 2.1-1.4-1.4z"/>
              </svg>`,
        moon: `<svg aria-hidden="true" class="theme-icon" width="20" height="20" viewBox="0 0 24 24">
                 <path fill="currentColor" d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1-8.313-12.454z"/>
               </svg>`
    };

    // Cargar tema con validación robusta
    const loadTheme = () => {
        try {
            const savedTheme = localStorage.getItem(themeKey);
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            return ['dark', 'light'].includes(savedTheme) ? savedTheme : systemTheme;
        } catch (error) {
            console.error('Error loading theme:', error);
            return 'dark';
        }
    };

    // Aplicar tema con transiciones
    const applyTheme = (theme) => {
    html.style.transition = 'none';
    html.setAttribute('data-theme', theme);
    localStorage.setItem(themeKey, theme);
    
    // Actualizar icono
    themeToggle.innerHTML = theme === 'dark' ? themeIcons.moon : themeIcons.sun;
    
    // Forzar repintado
    void themeToggle.offsetWidth;
    
    setTimeout(() => {
        html.style.transition = 'background-color 0.3s, color 0.3s';
    }, 10);
};

    // Animación de botón con CSS
    const animateButton = () => {
        themeToggle.classList.add('theme-active');
        setTimeout(() => themeToggle.classList.remove('theme-active'), 300);
    };

    // Manejador del click mejorado
    const handleThemeToggle = () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        animateButton();
        applyTheme(newTheme);
    };

    // Inicialización segura
    const initializeTheme = () => {
        try {
            const initialTheme = loadTheme();
            applyTheme(initialTheme);
            themeToggle.addEventListener('click', handleThemeToggle);
        } catch (error) {
            console.error('Theme initialization failed:', error);
            applyTheme('dark');
        }
    };

    // Iniciar sistema de temas
    initializeTheme();

});