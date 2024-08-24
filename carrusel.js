document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Cambia de imagen cada 3 segundos (3000 milisegundos)
    setInterval(nextSlide, 3000);

    // Muestra la primera imagen inicialmente
    showSlide(currentIndex);
});
