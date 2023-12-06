// script.js

// Función para mezclar aleatoriamente los elementos del carrusel
function shuffleCarousel() {
    var carouselInner = document.getElementById('randomize-carousel');
    var items = Array.from(carouselInner.children);

    items.sort(function () {
        return 0.5 - Math.random();
    });

    items.forEach(function (item) {
        carouselInner.appendChild(item);
    });
}

// Mezclar el carrusel al cargar la página
window.onload = shuffleCarousel;
