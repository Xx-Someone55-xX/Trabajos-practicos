document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const currentPunto = document.getElementById('current-punto');
    
    let currentSlide = 0;

    function updateSlide() {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentSlide].classList.add('active');
        currentPunto.textContent = currentSlide + 1;
    }

    prevBtn.addEventListener('click', () => {
        if(currentSlide > 0) {
            currentSlide--;
            updateSlide();
        }
    });

    nextBtn.addEventListener('click', () => {
        if(currentSlide < slides.length - 1) {
            currentSlide++;
            updateSlide();
        }
    });
});