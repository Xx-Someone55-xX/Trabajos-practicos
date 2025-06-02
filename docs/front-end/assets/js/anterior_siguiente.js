// anterior_siguiente.js - Controlador de navegación para los puntos del TP1

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const currentPunto = document.getElementById('current-punto');
    
    let currentSlide = 0;

    // Función para mostrar un slide específico
    function showSlide(index) {
        // Validar el índice
        if (index < 0) index = 0;
        if (index >= slides.length) index = slides.length - 1;
        
        // Ocultar todos los slides
        slides.forEach(slide => {
            slide.classList.remove('active');
            slide.style.display = 'none';
        });
        
        // Mostrar el slide actual
        slides[index].classList.add('active');
        slides[index].style.display = 'block';
        currentPunto.textContent = index + 1;
        currentSlide = index;
        
        // Actualizar estado de los botones
        updateButtonStates();
    }

    // Función para actualizar el estado de los botones
    function updateButtonStates() {
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === slides.length - 1;
        
        // Añadir clases CSS para estilo cuando están deshabilitados
        if (prevBtn.disabled) {
            prevBtn.classList.add('disabled');
        } else {
            prevBtn.classList.remove('disabled');
        }
        
        if (nextBtn.disabled) {
            nextBtn.classList.add('disabled');
        } else {
            nextBtn.classList.remove('disabled');
        }
    }

    // Event listeners para los botones
    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
            showSlide(currentSlide + 1);
        }
    });

    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        }
    });

    // Inicializar
    showSlide(0);
});