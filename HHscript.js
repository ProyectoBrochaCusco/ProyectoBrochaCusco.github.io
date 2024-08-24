let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(${-currentSlide * 300}px)`;
}

function autoSlide() {
    changeSlide(1);
}

setInterval(autoSlide, 3000); // Cambia la diapositiva cada 3 segundos


const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#botonParaCerrar");


abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});


cerrar.addEventListener("click", function() {
    nav.classList.remove("visible");
});

