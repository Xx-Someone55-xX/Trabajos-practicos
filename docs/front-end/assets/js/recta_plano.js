/**
 * Archivo: recta_plano.js
 * Lógica para Rectas y Planos (Aislada, Renombrada e Interactiva)
 * CORRECCIÓN: Renderizado dinámico de MathJax.
 */

(function() {
    // Variables locales con prefijo 'rp_' para evitar conflictos
    let rpChart2DInstance = null;
    
    document.addEventListener('DOMContentLoaded', () => {
        // Verificar existencia de contenedores
        const rpCanvas2D = document.getElementById('grafico2D');
        const rpContainer3D = document.getElementById('grafico3D');

        if (!rpCanvas2D || !rpContainer3D) return; 

        // Inicializar
        initRPApp();
    });

    function initRPApp() {
        const ui = {
            sliderM: document.getElementById('slider-m'),
            sliderD: document.getElementById('slider-d'),
            valM: document.getElementById('val-m'),
            valD: document.getElementById('val-d'),
            
            // Elemento para el cálculo matemático dinámico
            calculoBox: document.getElementById('calculo-2d'),

            sliderA: document.getElementById('slider-A'),
            sliderB: document.getElementById('slider-B'),
            sliderDelta: document.getElementById('slider-delta'),
            valA: document.getElementById('val-A'),
            valB: document.getElementById('val-B'),
            valDelta: document.getElementById('val-delta')
        };

        // Listeners 2D
        if (ui.sliderM && ui.sliderD) {
            [ui.sliderM, ui.sliderD].forEach(el => {
                el.addEventListener('input', () => updateRPChart2D(ui));
            });
        }

        // Listeners 3D
        if (ui.sliderA && ui.sliderB && ui.sliderDelta) {
            [ui.sliderA, ui.sliderB, ui.sliderDelta].forEach(el => {
                el.addEventListener('input', () => updateRPChart3D(ui));
            });
        }

        // Renderizado Inicial
        updateRPChart2D(ui);
        
        setTimeout(() => {
            updateRPChart3D(ui);
        }, 100);

        window.addEventListener('resize', () => {
            const container3D = document.getElementById('grafico3D');
            if(container3D && window.Plotly) Plotly.Plots.resize(container3D);
        });

        new MutationObserver(() => {
            setTimeout(() => {
                updateRPChart2D(ui);
                updateRPChart3D(ui);
            }, 200);
        }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    }

    function getRPThemeColors() {
        const style = getComputedStyle(document.body);
        return {
            accent: style.getPropertyValue('--color-algebra') || '#f1c40f',
            text: style.getPropertyValue('--text-color') || '#333',
            grid: style.getPropertyValue('--table-border-color') || '#ccc',
            fill: (style.getPropertyValue('--color-algebra') || '#f1c40f') + '33'
        };
    }

    // --- LÓGICA GRÁFICO 2D Y CÁLCULO ---
    function updateRPChart2D(ui) {
        if (!ui.sliderM || !document.getElementById('grafico2D')) return;

        const m = parseFloat(ui.sliderM.value);
        const d = parseFloat(ui.sliderD.value);

        if(ui.valM) ui.valM.textContent = m.toFixed(1);
        if(ui.valD) ui.valD.textContent = d.toFixed(0);

        // --- AQUÍ ESTÁ EL CAMBIO CLAVE PARA MATHJAX ---
        if (ui.calculoBox) {
            const T_limit = 10;
            let resultado = (T_limit - d) / m;
            let textoResultado;
            
            if (resultado < 0) {
                textoResultado = "\\text{Imposible (T} > 10\\text{s)}";
            } else if (!isFinite(resultado)) {
                textoResultado = "\\text{Indefinido}";
            } else {
                textoResultado = `${resultado.toFixed(1)} \\; \\text{usuarios}`;
            }

            const latexFormula = `$$ x = \\frac{10 - ${d}}{${m}} = \\mathbf{${textoResultado}} $$`;
            
            // 1. Insertamos el nuevo texto
            ui.calculoBox.innerHTML = latexFormula;

            // 2. Forzamos a MathJax a renderizarlo de nuevo
            if (window.MathJax) {
                // Limpiamos el estado anterior del elemento (importante para evitar conflictos)
                if(MathJax.typesetClear) MathJax.typesetClear([ui.calculoBox]);
                
                // Renderizamos
                if(MathJax.typesetPromise) {
                    MathJax.typesetPromise([ui.calculoBox]).catch((err) => console.log('MathJax error:', err));
                }
            }
        }
        // ----------------------------------------------

        const colors = getRPThemeColors();
        const xVals = [0, 10, 20, 30, 40, 50];
        const yVals = xVals.map(x => m * x + d);

        const ctx = document.getElementById('grafico2D').getContext('2d');

        if (rpChart2DInstance) {
            rpChart2DInstance.data.datasets[0].data = yVals;
            rpChart2DInstance.data.datasets[0].label = `T = ${m.toFixed(1)}x + ${d}`;
            rpChart2DInstance.data.datasets[0].borderColor = colors.accent;
            rpChart2DInstance.data.datasets[0].backgroundColor = colors.fill;
            rpChart2DInstance.options.scales.x.ticks.color = colors.text;
            rpChart2DInstance.options.scales.y.ticks.color = colors.text;
            rpChart2DInstance.options.scales.x.grid.color = colors.grid;
            rpChart2DInstance.options.scales.y.grid.color = colors.grid;
            rpChart2DInstance.update();
        } else {
            rpChart2DInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: xVals,
                    datasets: [{
                        label: `T = ${m}x + ${d}`,
                        data: yVals,
                        borderColor: colors.accent,
                        backgroundColor: colors.fill,
                        fill: true,
                        tension: 0.1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: { title: { display: true, text: 'Usuarios (x)', color: colors.text }, ticks: { color: colors.text }, grid: { color: colors.grid } },
                        y: { title: { display: true, text: 'Tiempo (T)', color: colors.text }, ticks: { color: colors.text }, grid: { color: colors.grid }, beginAtZero: true }
                    },
                    plugins: { legend: { labels: { color: colors.text } } }
                }
            });
        }
    }

    // --- LÓGICA GRÁFICO 3D ---
    function updateRPChart3D(ui) {
        const container = document.getElementById('grafico3D');
        if (!container || !ui.sliderA) return;

        const A = parseFloat(ui.sliderA.value);
        const B = parseFloat(ui.sliderB.value);
        const delta = parseFloat(ui.sliderDelta.value);

        if(ui.valA) ui.valA.textContent = A.toFixed(1);
        if(ui.valB) ui.valB.textContent = B.toFixed(1);
        if(ui.valDelta) ui.valDelta.textContent = delta.toFixed(0);

        const xVals = [0, 10, 20, 30, 40, 50];
        const yVals = [0, 20, 40, 60, 80, 100];
        const zVals = [];

        for (let i = 0; i < yVals.length; i++) {
            let row = [];
            for (let j = 0; j < xVals.length; j++) {
                row.push(A * xVals[j] + B * yVals[i] + delta);
            }
            zVals.push(row);
        }

        const colors = getRPThemeColors();

        const trace = {
            type: 'surface',
            x: xVals, y: yVals, z: zVals,
            colorscale: 'Viridis', showscale: false, opacity: 0.9,
            contours: { z: { show: true, usecolormap: true, highlightcolor: "#42f462", project: { z: true } } }
        };

        const layout = {
            title: { text: `z = ${A}x + ${B}y + ${delta}`, font: { color: colors.text } },
            autosize: true,
            margin: { l: 0, r: 0, b: 0, t: 30 },
            paper_bgcolor: 'transparent', plot_bgcolor: 'transparent',
            scene: {
                xaxis: { title: 'Usuarios (x)', color: colors.text, tickcolor: colors.text },
                yaxis: { title: 'Archivos (y)', color: colors.text, tickcolor: colors.text },
                zaxis: { title: 'Tiempo (z)', color: colors.text, tickcolor: colors.text }
            }
        };

        const config = { responsive: true, displayModeBar: false };

        if (window.Plotly) {
            Plotly.react(container, [trace], layout, config);
        }
    }

})();