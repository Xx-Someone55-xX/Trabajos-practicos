/**
 * Archivo: producto_mixto.js
 * Lógica 3D para el TP de Álgebra (Producto Mixto)
 * - Pileta Azul
 * - Notación Vectorial con Flechas
 */

(function() {
    // Variables locales
    let pmScene, pmCamera, pmRenderer, pmParallelepiped, pmControls;
    let pmPoints = [], pmLabels = [], pmVectors = [];
    let pmAxesHelper;
    
    document.addEventListener('DOMContentLoaded', function() {
        const container = document.getElementById('producto-mixto-canvas-container');
        if (!container) return; 
        
        try {
            initPM(container);
            animatePM();
            setupPMThemeObserver();
            
            const updateButton = document.getElementById('pm-update-vectors');
            if (updateButton) {
                updateButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    updatePMParallelepiped();
                });
            }
            
            setTimeout(onWindowResizePM, 500);
            
        } catch (e) {
            console.error("Error iniciando Producto Mixto 3D:", e);
        }
    });

    function initPM(container) {
        let width = container.clientWidth;
        let height = container.clientHeight;

        if (height === 0) {
            height = 400;
            container.style.height = '400px';
        }
        if (width === 0) width = 600;

        pmScene = new THREE.Scene();
        updatePMSceneBackground();
        
        pmCamera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        pmCamera.position.set(8, 8, 12);
        pmCamera.lookAt(0, 0, 0);
        
        pmRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        pmRenderer.setSize(width, height);
        pmRenderer.setPixelRatio(window.devicePixelRatio);
        
        container.innerHTML = ''; 
        container.appendChild(pmRenderer.domElement);
        
        pmControls = new THREE.OrbitControls(pmCamera, pmRenderer.domElement);
        pmControls.enableDamping = true;
        pmControls.dampingFactor = 0.05;
        
        setupPMLights();
        setupPMAxes();
        updatePMParallelepiped();
        
        window.addEventListener('resize', onWindowResizePM);
    }

    function onWindowResizePM() {
        const container = document.getElementById('producto-mixto-canvas-container');
        if (!container || !pmCamera || !pmRenderer) return;
        
        const width = container.clientWidth;
        const height = container.clientHeight || 400;
        
        pmCamera.aspect = width / height;
        pmCamera.updateProjectionMatrix();
        pmRenderer.setSize(width, height);
    }

    function setupPMThemeObserver() {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.attributeName === 'data-theme') {
                    updatePMSceneBackground();
                    updatePMAxesColor();
                    updatePMParallelepiped();
                }
            });
        });
        observer.observe(document.documentElement, { attributes: true });
    }

    function updatePMSceneBackground() {
        if(!pmScene) return;
        const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
        pmScene.background = new THREE.Color(isDarkMode ? 0x1a1a1a : 0xf4f7f6);
    }

    function setupPMLights() {
        const ambientLight = new THREE.AmbientLight(0x606060);
        pmScene.add(ambientLight);
        const mainLight = new THREE.DirectionalLight(0xffffff, 0.9);
        mainLight.position.set(5, 10, 7);
        pmScene.add(mainLight);
    }

    function setupPMAxes() {
        pmAxesHelper = new THREE.AxesHelper(10);
        pmScene.add(pmAxesHelper);
        updatePMAxesColor();
    }

    function updatePMAxesColor() {
        if (!pmAxesHelper) return;
        const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
        pmAxesHelper.material.color.set(isDarkMode ? 0x666666 : 0xaaaaaa); 
    }

    function updatePMParallelepiped() {
        try {
            const getVal = (id) => parseFloat(document.getElementById(id)?.value) || 0;

            const a = new THREE.Vector3(getVal('pm-a-x'), getVal('pm-a-y'), getVal('pm-a-z'));
            const b = new THREE.Vector3(getVal('pm-b-x'), getVal('pm-b-y'), getVal('pm-b-z'));
            const c = new THREE.Vector3(getVal('pm-c-x'), getVal('pm-c-y'), getVal('pm-c-z'));
            
            const cross = new THREE.Vector3();
            cross.crossVectors(b, c);
            const dot = a.dot(cross);
            const volume = Math.abs(dot);
            
            const resultBox = document.getElementById('pm-volume-result');
            // Usamos MathJax en el resultado también
            if(resultBox) {
                resultBox.innerHTML = `$$ \\text{Volumen: } | \\vec{a} \\cdot (\\vec{b} \\times \\vec{c}) | = ${volume.toFixed(2)} $$`;
                if(window.MathJax && MathJax.typesetPromise) {
                    MathJax.typesetPromise([resultBox]).catch(err => console.log(err));
                }
            }
            
            showPMCalculationSteps(a, b, c, cross, dot);
            
            clearPMObjects();
            createPMParallelepiped(a, b, c);
            
            drawPMVector(new THREE.Vector3(0, 0, 0), a, getPMVectorColor('a'), 'a');
            drawPMVector(new THREE.Vector3(0, 0, 0), b, getPMVectorColor('b'), 'b');
            drawPMVector(new THREE.Vector3(0, 0, 0), c, getPMVectorColor('c'), 'c');
            
        } catch (error) {
            console.warn("Esperando inputs para calcular...", error);
        }
    }

    function getPMVectorColor(name) {
        switch(name) {
            case 'a': return 0xff0000;
            case 'b': return 0x00cc00;
            case 'c': return 0x0000ff;
            default: return 0xffffff;
        }
    }

    function clearPMObjects() {
        if (pmParallelepiped) {
            pmParallelepiped.geometry.dispose();
            if(Array.isArray(pmParallelepiped.material)) {
                pmParallelepiped.material.forEach(m => m.dispose());
            } else {
                pmParallelepiped.material.dispose();
            }
            pmScene.remove(pmParallelepiped);
        }
        
        pmPoints.forEach(p => pmScene.remove(p));
        pmLabels.forEach(l => pmScene.remove(l));
        pmVectors.forEach(v => pmScene.remove(v));
        
        pmPoints = []; pmLabels = []; pmVectors = [];
    }

    function createPMParallelepiped(a, b, c) {
        const vertices = [
            new THREE.Vector3(0, 0, 0),
            a.clone(), b.clone(), c.clone(),
            a.clone().add(b), a.clone().add(c), b.clone().add(c),
            a.clone().add(b).add(c)
        ];
        
        vertices.forEach((v) => {
            const geometry = new THREE.SphereGeometry(0.15, 16, 16);
            const material = new THREE.MeshBasicMaterial({ color: 0x333333 });
            const point = new THREE.Mesh(geometry, material);
            point.position.copy(v);
            pmScene.add(point);
            pmPoints.push(point);
        });
        
        const geometry = new THREE.BufferGeometry();
        const positions = [];
        vertices.forEach(v => positions.push(v.x, v.y, v.z));
        
        geometry.setIndex([
            0, 2, 1, 1, 2, 4, 0, 3, 2, 2, 3, 6,
            0, 1, 3, 3, 1, 5, 7, 5, 6, 7, 4, 5,
            7, 6, 4, 4, 6, 2, 7, 1, 4, 7, 5, 1
        ]);
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.computeVertexNormals();
        
        const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
        
        // PILETA AZUL
        const material = new THREE.MeshPhongMaterial({
            color: isDarkMode ? 0x1E90FF : 0x00BFFF, 
            transparent: true, opacity: 0.4, side: THREE.DoubleSide,
            shininess: 70
        });
        
        pmParallelepiped = new THREE.Mesh(geometry, material);
        
        const edges = new THREE.EdgesGeometry(geometry);
        const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x0047ab, transparent: true, opacity: 0.5 }));
        pmParallelepiped.add(line);
        
        pmScene.add(pmParallelepiped);
    }

    function drawPMVector(origin, vector, color, name) {
        const len = vector.length();
        if (len < 0.001) return; 
        const dir = vector.clone().normalize();
        const arrowHelper = new THREE.ArrowHelper(dir, origin, len, color, 0.3, 0.2);
        pmScene.add(arrowHelper);
        pmVectors.push(arrowHelper);
    }

    function showPMCalculationSteps(a, b, c, cross, dot) {
        const stepsDiv = document.getElementById('pm-calculation-steps');
        if(!stepsDiv) return;
        
        stepsDiv.innerHTML = '';
        const steps = [
            { 
                t: "Paso 1: Vectores", 
                // Usamos \vec{} para las flechas
                c: `$$ \\vec{a}=(${a.x},${a.y},${a.z}) $$ $$ \\vec{b}=(${b.x},${b.y},${b.z}) $$ $$ \\vec{c}=(${c.x},${c.y},${c.z}) $$` 
            },
            { 
                t: "Paso 2: Producto Vectorial", 
                c: `$$ \\vec{b} \\times \\vec{c} = (${cross.x.toFixed(1)}, ${cross.y.toFixed(1)}, ${cross.z.toFixed(1)}) $$` 
            },
            { 
                t: "Paso 3: Producto Escalar", 
                c: `$$ \\vec{a} \\cdot (\\vec{b} \\times \\vec{c}) = ${dot.toFixed(1)} $$` 
            },
            { 
                t: "Paso 4: Módulo", 
                c: `$$ \\text{Volumen} = |${dot.toFixed(1)}| = ${Math.abs(dot).toFixed(1)} $$` 
            }
        ];
        
        steps.forEach(step => {
            const d = document.createElement('div');
            d.className = 'producto-mixto-step';
            d.innerHTML = `<div class="producto-mixto-step-title">${step.t}</div><div class="producto-mixto-math">${step.c}</div>`;
            stepsDiv.appendChild(d);
        });

        // IMPORTANTE: Pedimos a MathJax que procese los nuevos elementos
        if(window.MathJax && MathJax.typesetPromise) {
            MathJax.typesetPromise([stepsDiv]).catch(err => console.log(err));
        }
    }

    function animatePM() {
        requestAnimationFrame(animatePM);
        if(pmControls) pmControls.update();
        if(pmRenderer && pmScene && pmCamera) pmRenderer.render(pmScene, pmCamera);
    }

})();