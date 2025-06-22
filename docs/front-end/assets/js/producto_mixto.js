// Variables globales
let scene, camera, renderer, parallelepiped, controls;
let points = [], labels = [], vectors = [];
let axesHelper;

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    init();
    animate();
    setupThemeObserver();
});

function init() {
    // 1. Configuración inicial de Three.js
    scene = new THREE.Scene();
    updateSceneBackground();
    
    const canvasContainer = document.getElementById('producto-mixto-canvas-container');
    
    // 2. Configuración de cámara
    camera = new THREE.PerspectiveCamera(
        75, 
        canvasContainer.clientWidth / (canvasContainer.clientHeight * 0.7), 
        0.1, 
        1000
    );
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);
    
    // 3. Renderizador con antialiasing
    renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true
    });
    renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight * 0.7);
    canvasContainer.appendChild(renderer.domElement);
    
    // 4. Controles de órbita
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    
    // 5. Iluminación
    setupLights();
    
    // 6. Ejes de coordenadas
    setupAxes();
    
    // 7. Carga inicial
    updateParallelepiped();
    
    // 8. Event listeners
    window.addEventListener('resize', onWindowResize);
    document.getElementById('update-vectors').addEventListener('click', updateParallelepiped);
}

function setupThemeObserver() {
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'data-theme') {
                updateSceneBackground();
                updateAxesColor();
                updateLabelsColor();
                updateMaterials();
            }
        });
    });
    
    observer.observe(document.documentElement, {
        attributes: true
    });
}

function updateSceneBackground() {
    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
    scene.background = new THREE.Color(isDarkMode ? 0x121212 : 0xf0f0f0);
}

function setupLights() {
    // Luz ambiental adaptable
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    // Luz direccional principal
    const mainLight = new THREE.DirectionalLight(0xffffff, 0.8);
    mainLight.position.set(1, 1, 1);
    scene.add(mainLight);
    
    // Luz de relleno
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
    fillLight.position.set(-1, -1, -1);
    scene.add(fillLight);
}

function setupAxes() {
    axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);
    updateAxesColor();
}

function updateAxesColor() {
    if (!axesHelper) return;
    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
    axesHelper.material.color.set(isDarkMode ? 0x555555 : 0x000000);
}

function updateLabelsColor() {
    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
    labels.forEach(label => {
        const canvas = label.material.map.image;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = '14px Arial';
        ctx.fillStyle = isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.8)';
        ctx.fillText(label.userData.text, 10, 20);
        label.material.map.needsUpdate = true;
    });
}

function updateMaterials() {
    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
    
    // Ajustar color de los vectores para mejor contraste
    vectors.forEach(vector => {
        if (vector.userData.name === 'a') vector.setColor(isDarkMode ? 0xff6666 : 0xff0000);
        if (vector.userData.name === 'b') vector.setColor(isDarkMode ? 0x66ff66 : 0x00ff00);
        if (vector.userData.name === 'c') vector.setColor(isDarkMode ? 0x6666ff : 0x0000ff);
    });
    
    // Ajustar puntos
    points.forEach(point => {
        point.material.color.set(isDarkMode ? 0xff6666 : 0xff0000);
    });
}

function updateParallelepiped() {
    // 1. Obtener valores de los inputs
    const a = new THREE.Vector3(
        parseFloat(document.getElementById('a-x').value),
        parseFloat(document.getElementById('a-y').value),
        parseFloat(document.getElementById('a-z').value)
    );
    
    const b = new THREE.Vector3(
        parseFloat(document.getElementById('b-x').value),
        parseFloat(document.getElementById('b-y').value),
        parseFloat(document.getElementById('b-z').value)
    );
    
    const c = new THREE.Vector3(
        parseFloat(document.getElementById('c-x').value),
        parseFloat(document.getElementById('c-y').value),
        parseFloat(document.getElementById('c-z').value)
    );
    
    // 2. Cálculos matemáticos
    const cross = new THREE.Vector3();
    cross.crossVectors(b, c);
    const dot = a.dot(cross);
    const volume = Math.abs(dot);
    
    // 3. Actualizar UI
    document.getElementById('volume-result').innerHTML = 
        `Volumen: |a · (b × c)| = ${volume.toFixed(2)}`;
    showCalculationSteps(a, b, c, cross, dot);
    
    // 4. Limpiar objetos anteriores
    clearPreviousObjects();
    
    // 5. Crear nuevo paralelepípedo
    createParallelepiped(a, b, c);
    
    // 6. Dibujar vectores
    drawVector(new THREE.Vector3(0, 0, 0), a, getVectorColor('a'), 'a');
    drawVector(new THREE.Vector3(0, 0, 0), b, getVectorColor('b'), 'b');
    drawVector(new THREE.Vector3(0, 0, 0), c, getVectorColor('c'), 'c');
}

function getVectorColor(name) {
    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
    switch(name) {
        case 'a': return isDarkMode ? 0xff6666 : 0xff0000;
        case 'b': return isDarkMode ? 0x66ff66 : 0x00ff00;
        case 'c': return isDarkMode ? 0x6666ff : 0x0000ff;
        default: return 0xffffff;
    }
}

function clearPreviousObjects() {
    if (parallelepiped) scene.remove(parallelepiped);
    points.forEach(p => scene.remove(p));
    labels.forEach(l => scene.remove(l));
    vectors.forEach(v => scene.remove(v));
    points = []; labels = []; vectors = [];
}

function createParallelepiped(a, b, c) {
    const vertices = [
        new THREE.Vector3(0, 0, 0),
        a.clone(),
        b.clone(),
        c.clone(),
        a.clone().add(b),
        a.clone().add(c),
        b.clone().add(c),
        a.clone().add(b).add(c)
    ];
    
    // Crear puntos
    vertices.forEach((v, i) => {
        const pointGeometry = new THREE.SphereGeometry(0.1, 16, 16);
        const pointMaterial = new THREE.MeshBasicMaterial({ 
            color: getVectorColor('a') // Usar mismo color que vector a
        });
        const point = new THREE.Mesh(pointGeometry, pointMaterial);
        point.position.copy(v);
        scene.add(point);
        points.push(point);
        
        const label = createTextLabel(`P${i} (${v.x.toFixed(1)}, ${v.y.toFixed(1)}, ${v.z.toFixed(1)})`);
        label.position.copy(v);
        scene.add(label);
        labels.push(label);
    });
    
    // Configurar geometría
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
    
    // Material adaptable
    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
    const material = new THREE.MeshPhongMaterial({
        color: isDarkMode ? 0x1a8cff : 0x0066cc,
        transparent: true,
        opacity: 0.5,
        side: THREE.DoubleSide
    });
    
    parallelepiped = new THREE.Mesh(geometry, material);
    scene.add(parallelepiped);
}

function drawVector(origin, vector, color, name) {
    const dir = vector.clone().normalize();
    const arrowHelper = new THREE.ArrowHelper(
        dir,
        origin,
        vector.length(),
        color,
        0.2,
        0.1
    );
    arrowHelper.userData = { name: name };
    scene.add(arrowHelper);
    vectors.push(arrowHelper);
    
    const label = createTextLabel(`${name} (${vector.x.toFixed(1)}, ${vector.y.toFixed(1)}, ${vector.z.toFixed(1)})`);
    label.position.copy(origin.clone().add(vector.clone().multiplyScalar(0.5)));
    scene.add(label);
    labels.push(label);
}

function createTextLabel(text) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 128;
    const context = canvas.getContext('2d');
    context.font = '14px Arial';
    
    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
    context.fillStyle = isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.8)';
    context.fillText(text, 10, 20);
    
    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({ 
        map: texture,
        transparent: true
    });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(1, 0.5, 1);
    sprite.userData = { text: text };
    
    return sprite;
}

function showCalculationSteps(a, b, c, cross, dot) {
    const stepsDiv = document.getElementById('calculation-steps');
    stepsDiv.innerHTML = '';
    
    const steps = [
        {
            title: "Paso 1: Vectores iniciales",
            content: `
                a = (${a.x.toFixed(1)}, ${a.y.toFixed(1)}, ${a.z.toFixed(1)})<br>
                b = (${b.x.toFixed(1)}, ${b.y.toFixed(1)}, ${b.z.toFixed(1)})<br>
                c = (${c.x.toFixed(1)}, ${c.y.toFixed(1)}, ${c.z.toFixed(1)})
            `
        },
        {
            title: "Paso 2: Producto vectorial b × c",
            content: `
                b × c = (b₂·c₃ - b₃·c₂, b₃·c₁ - b₁·c₃, b₁·c₂ - b₂·c₁)<br>
                = (${b.y.toFixed(1)}·${c.z.toFixed(1)} - ${b.z.toFixed(1)}·${c.y.toFixed(1)}, ${b.z.toFixed(1)}·${c.x.toFixed(1)} - ${b.x.toFixed(1)}·${c.z.toFixed(1)}, ${b.x.toFixed(1)}·${c.y.toFixed(1)} - ${b.y.toFixed(1)}·${c.x.toFixed(1)})<br>
                = (${(b.y*c.z).toFixed(1)} - ${(b.z*c.y).toFixed(1)}, ${(b.z*c.x).toFixed(1)} - ${(b.x*c.z).toFixed(1)}, ${(b.x*c.y).toFixed(1)} - ${(b.y*c.x).toFixed(1)})<br>
                = (${cross.x.toFixed(1)}, ${cross.y.toFixed(1)}, ${cross.z.toFixed(1)})
            `
        },
        {
            title: "Paso 3: Producto punto a · (b × c)",
            content: `
                a · (b × c) = (${a.x.toFixed(1)}·${cross.x.toFixed(1)}) + (${a.y.toFixed(1)}·${cross.y.toFixed(1)}) + (${a.z.toFixed(1)}·${cross.z.toFixed(1)})<br>
                = ${(a.x*cross.x).toFixed(1)} + ${(a.y*cross.y).toFixed(1)} + ${(a.z*cross.z).toFixed(1)}<br>
                = ${dot.toFixed(1)}
            `
        },
        {
            title: "Paso 4: Valor absoluto",
            content: `Volumen = |${dot.toFixed(1)}| = ${Math.abs(dot).toFixed(1)}`
        }
    ];
    
    steps.forEach(step => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'producto-mixto-step';
        stepDiv.innerHTML = `
            <div class="producto-mixto-step-title">${step.title}</div>
            <div class="producto-mixto-math">${step.content}</div>
        `;
        stepsDiv.appendChild(stepDiv);
    });
}

function onWindowResize() {
    const canvasContainer = document.getElementById('producto-mixto-canvas-container');
    const newHeight = canvasContainer.clientHeight * 0.7;
    camera.aspect = canvasContainer.clientWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvasContainer.clientWidth, newHeight);
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}