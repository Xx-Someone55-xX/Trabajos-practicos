document.addEventListener('DOMContentLoaded', function() {
    const navPoints = document.querySelectorAll('.nav-point');
    const slides = document.querySelectorAll('.slide');
    const currentPunto = document.getElementById('current-punto');
    const totalPuntos = navPoints.length;

    // Función mejorada para cambiar de punto
    function goToPoint(pointNumber) {
        // Validación de rango
        pointNumber = Math.max(1, Math.min(pointNumber, totalPuntos));
        
        // Ocultar todos los slides excepto el activo
        slides.forEach((slide, index) => {
            if (index === pointNumber - 1) {
                slide.classList.add('active');
                slide.style.display = 'block';
            } else {
                slide.classList.remove('active');
                slide.style.display = 'none';
            }
        });

        // Actualizar contador
        currentPunto.textContent = pointNumber;
        
        // Actualizar puntos de navegación - VERSIÓN CORREGIDA
        navPoints.forEach(point => {
            const pointValue = parseInt(point.getAttribute('data-point'));
            point.classList.remove('active');
            
            if (pointValue === pointNumber) {
                point.classList.add('active');
                
                // Scroll suave para móviles
                point.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        });
    }

    // Event listeners mejorados
    navPoints.forEach(point => {
        point.addEventListener('click', function() {
            const pointNumber = parseInt(this.getAttribute('data-point'));
            goToPoint(pointNumber);
        });
    });

    // Inicialización
    goToPoint(1);

    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        const current = parseInt(currentPunto.textContent);
        if (e.key === 'ArrowLeft' && current > 1) {
            goToPoint(current - 1);
        } else if (e.key === 'ArrowRight' && current < slides.length) {
            goToPoint(current + 1);
        }
    });
});