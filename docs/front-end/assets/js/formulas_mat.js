
//Descripción: Carga y configura MathJax para renderizar fórmulas matemáticas.


// 1. Configuración de MathJax antes de cargar la librería
window.MathJax = {
    tex: {
        // Permite usar signos de peso simples ($) para fórmulas en línea
        // y dobles ($$) para fórmulas en bloque.
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']] 
    },
    options: {
        // Evita que MathJax procese contenido dentro de estas etiquetas
        skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
    }
};

// 2. Función auxiliar para inyectar scripts en el <head>
function loadScript(src, id) {
    // Evita cargar el script si ya existe
    if (id && document.getElementById(id)) return;

    var script = document.createElement('script');
    script.src = src;
    script.async = true;
    if (id) script.id = id;
    document.head.appendChild(script);
}

// 3. Cargar Polyfill (para compatibilidad con navegadores antiguos)
loadScript('https://polyfill.io/v3/polyfill.min.js?features=es6');

// 4. Cargar la librería principal de MathJax
loadScript('https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js', 'MathJax-script');