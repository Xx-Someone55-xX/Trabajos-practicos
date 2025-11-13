/**
 * Archivo: recta_plano.js
 * Lógica para inicializar los gráficos de Chart.js y Plotly.js
 * para la página tp_grupal_algebra2.html
 */

document.addEventListener('DOMContentLoaded', () => {

    // Instancias de gráficos (para poder destruirlos y redibujarlos)
    let chart2DInstance = null;
    let chart3DElement = document.getElementById('grafico3D');

    /**
     * Función para obtener los colores del tema actual desde las variables CSS.
     */
    function getThemeColors() {
        const styles = getComputedStyle(document.body);
        return {
            accent: styles.getPropertyValue('--color-algebra') || '#F1C40F',
            accentDark: styles.getPropertyValue('--color-algebra-dark') || '#D4AC0D',
            text: styles.getPropertyValue('--text-color') || '#333',
            grid: styles.getPropertyValue('--table-border-color') || '#ccc',
            bg: styles.getPropertyValue('--card-bg') || '#fff',
            bgTransparent: 'transparent'
        };
    }

    /**
     * Dibuja el gráfico 2D (Recta) con Chart.js
     */
    function drawChart2D() {
        const colors = getThemeColors();
        const ctx = document.getElementById('grafico2D');

        if (!ctx) return; // Salir si el elemento no existe

        // Destruir el gráfico anterior si existe (para cambiar tema)
        if (chart2DInstance) {
            chart2DInstance.destroy();
        }

        const data = {
            labels: [0, 10, 20, 30, 40, 50],
            datasets: [{
                label: 'Tiempo de Respuesta (T)',
                data: [5, 7, 9, 11, 13, 15],
                borderColor: colors.accent,
                backgroundColor: colors.accent + '33', // Añadir transparencia
                pointBackgroundColor: colors.accent,
                pointBorderColor: colors.bg,
                pointHoverRadius: 7,
                pointRadius: 5,
                fill: true,
                tension: 0.1
            }]
        };

        chart2DInstance = new Chart(ctx.getContext('2d'), {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Rendimiento del Sistema 2D (T = 0.2x + 5)',
                        color: colors.text,
                        font: { size: 16 }
                    },
                    legend: {
                        labels: { color: colors.text }
                    }
                },
                scales: {
                    x: {
                        title: { display: true, text: 'Usuarios Conectados (x)', color: colors.text },
                        ticks: { color: colors.text },
                        grid: { color: colors.grid }
                    },
                    y: {
                        title: { display: true, text: 'Tiempo de Respuesta (T) en seg.', color: colors.text },
                        ticks: { color: colors.text },
                        grid: { color: colors.grid }
                    }
                }
            }
        });
    }

    /**
     * Dibuja el gráfico 3D (Plano) con Plotly.js
     */
    function drawChart3D() {
        const colors = getThemeColors();
        
        if (!chart3DElement) return; // Salir si el elemento no existe

        // Ecuación: z = 0.6y + 3x + c
        // Asumimos c=5 ya que no está definido en el documento.
        const c = 5; 
        const x_vals = [];
        const y_vals = [];
        const z_vals = [];

        for (let x = 0; x <= 50; x += 5) {
            x_vals.push(x);
            let z_row = [];
            for (let y = 0; y <= 100; y += 10) {
                if (x === 0) y_vals.push(y);
                // z = 3x + 0.6y + c
                z_row.push((3 * x) + (0.6 * y) + c);
            }
            z_vals.push(z_row);
        }

        const data = [{
            type: 'surface',
            x: x_vals,
            y: y_vals,
            z: z_vals,
            colorscale: 'Viridis', // Una paleta de colores vibrante
            showscale: true,
            colorbar: {
                title: 'Tiempo (z)',
                titlefont: { color: colors.text },
                tickfont: { color: colors.text }
            }
        }];

        const layout = {
            title: 'Rendimiento del Sistema 3D (z = 0.6y + 3x + 5)',
            titlefont: { color: colors.text, size: 16 },
            scene: {
                xaxis: { title: 'Usuarios (x)', titlefont: { color: colors.text }, tickfont: { color: colors.text }, gridcolor: colors.grid },
                yaxis: { title: 'Tamaño Archivo (y)', titlefont: { color: colors.text }, tickfont: { color: colors.text }, gridcolor: colors.grid },
                zaxis: { title: 'Tiempo (z)', titlefont: { color: colors.text }, tickfont: { color: colors.text }, gridcolor: colors.grid }
            },
            autosize: true,
            paper_bgcolor: colors.bgTransparent, // Fondo transparente
            plot_bgcolor: colors.bgTransparent,
            margin: { l: 0, r: 0, b: 0, t: 40 }
        };

        Plotly.newPlot(chart3DElement, data, layout, { responsive: true });
    }

    /**
     * Inicializa ambos gráficos.
     */
    function initCharts() {
        drawChart2D();
        drawChart3D();
    }

    // --- Observador de cambio de tema ---
    // Esto es para redibujar los gráficos si el usuario cambia el tema (light/dark)
    // Tu 'theme.js' probablemente cambia el atributo 'data-theme' en el <html>
    
    const themeObserver = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                // El tema cambió, esperamos un momento para que se apliquen los CSS
                // y luego redibujamos los gráficos con los nuevos colores.
                setTimeout(() => {
                    initCharts();
                }, 100); // 100ms de búfer
            }
        }
    });

    // Observar cambios en el elemento <html>
    themeObserver.observe(document.documentElement, { attributes: true });

    // Dibujar los gráficos por primera vez al cargar la página
    initCharts();

});