document.addEventListener('DOMContentLoaded', function() {
    const colorThemes = {
        'index': {
            accent: '#3498db',
            buttonHoverBg: '#2980b9',
            themeBtn: '#7f8c8d',      // Gris para botón tema
            themeBtnHover: '#95a5a6'  // Gris hover
        },
        'algoritmos': {
            accent: '#e74c3c',
            buttonHoverBg: '#c0392b',
            themeBtn: '#e74c3c',      // Rojo para botón tema
            themeBtnHover: '#c0392b'  // Rojo hover
        },
        'tp1_algoritmos': {
            accent: '#e74c3c',
            buttonHoverBg: '#c0392b',
            themeBtn: '#e74c3c',      // Rojo para botón tema
            themeBtnHover: '#c0392b'  // Rojo hover
        }
    };

    // Detectar página
    const currentPage = document.body.classList.contains('tp1-algoritmos-page') 
        ? 'tp1_algoritmos' 
        : window.location.pathname.split('/').pop().replace('.html', '') || 'index';

    if (colorThemes[currentPage]) {
        const { accent, buttonHoverBg, themeBtn, themeBtnHover } = colorThemes[currentPage];
        
        // 1. Actualizar variables CSS principales
        document.documentElement.style.setProperty('--accent', accent);
        document.documentElement.style.setProperty('--button-hover-bg', buttonHoverBg);

        // 2. Control especial para botón tema
        const themeButton = document.querySelector('.theme-btn');
        if (themeButton) {
            themeButton.style.backgroundColor = themeBtn;
            themeButton.onmouseenter = () => {
                themeButton.style.backgroundColor = themeBtnHover;
            };
            themeButton.onmouseleave = () => {
                themeButton.style.backgroundColor = themeBtn;
            };
            
            // Manejar cambio de tema oscuro/claro
            new MutationObserver(() => {
                themeButton.style.backgroundColor = themeBtn;
            }).observe(document.documentElement, { 
                attributes: true, 
                attributeFilter: ['data-theme'] 
            });
        }
    }
});