document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-btn');
    const html = document.documentElement;

    // Función para aplicar el tema
    const applyTheme = (theme) => {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('tp-theme', theme);  // Cambiado el nombre de la key
        themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
    };

    // Detectar tema del sistema con polyfill
    const getSystemTheme = () => {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return isDark ? 'dark' : 'light';
    };

    // Cargar tema con validación reforzada
    const loadTheme = () => {
        try {
            const savedTheme = localStorage.getItem('tp-theme');
            return ['dark', 'light'].includes(savedTheme) ? savedTheme : getSystemTheme();
        } catch (error) {
            console.error('Error al cargar el tema:', error);
            return 'dark';
        }
    };

    // Animación mejorada con requestAnimationFrame
    const animateButton = () => {
        themeToggle.style.transform = 'scale(0.85)';
        requestAnimationFrame(() => {
            setTimeout(() => {
                themeToggle.style.transform = 'scale(1)';
            }, 100);
        });
    };

    // Manejador del click
    const handleThemeToggle = () => {
        const currentTheme = html.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        applyTheme(newTheme);
        animateButton();
        
        // Forzar repaint para transiciones CSS
        html.style.display = 'none';
        html.offsetHeight; // Trigger reflow
        html.style.display = '';
    };

    // Inicialización segura
    const initializeTheme = () => {
        try {
            const initialTheme = loadTheme();
            applyTheme(initialTheme);
            themeToggle.addEventListener('click', handleThemeToggle);
        } catch (error) {
            console.error('Error inicializando el tema:', error);
            applyTheme('dark');
        }
    };

    // Iniciar
    initializeTheme();
});