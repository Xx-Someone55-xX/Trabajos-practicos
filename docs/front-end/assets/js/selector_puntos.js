document.addEventListener('DOMContentLoaded', function() {
    const navPoints = document.querySelectorAll('.nav-point');
    const slides = document.querySelectorAll('.slide');
    const currentPunto = document.getElementById('current-punto');

    // Función para cambiar de punto
    function goToPoint(pointNumber) {
        // Ocultar todos los slides y quitar clase 'active'
        slides.forEach(slide => {
            slide.classList.remove('active');
            slide.style.display = 'none'; // Asegura que estén ocultos
        });

        // Mostrar el slide seleccionado
        slides[pointNumber - 1].classList.add('active');
        slides[pointNumber - 1].style.display = 'block'; // Asegura que sea visible

        // Actualizar contador
        currentPunto.textContent = pointNumber;

        // Actualizar menú lateral (resaltar punto activo)
        navPoints.forEach(point => {
            point.classList.remove('active');
            if (parseInt(point.dataset.point) === pointNumber) {
                point.classList.add('active');
            }
        });
    }

    // Event listeners para los puntos del menú lateral
    navPoints.forEach(point => {
        point.addEventListener('click', function() {
            const pointNumber = parseInt(this.dataset.point);
            goToPoint(pointNumber);
        });
    });

    // Inicializar: mostrar el primer punto
    goToPoint(1);

    // Opcional: Navegación con teclado (flechas izquierda/derecha)
    document.addEventListener('keydown', (e) => {
        const current = parseInt(currentPunto.textContent);
        if (e.key === 'ArrowLeft' && current > 1) {
            goToPoint(current - 1);
        } else if (e.key === 'ArrowRight' && current < slides.length) {
            goToPoint(current + 1);
        }
    });
});