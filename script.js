// Animación de entrada
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.escondido');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('revelar');
        }, 150 * index);
    });
});

// Carrusel de imágenes simple con optimización móvil
const imagenes = document.querySelectorAll('.img-item');
let current = 0;
let intervalId;

function nextImage() {
    if (imagenes.length === 0) return;
    
    imagenes[current].classList.remove('active');
    current = (current + 1) % imagenes.length;
    imagenes[current].classList.add('active');
}

function startCarousel() {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(nextImage, 4000);
}

function stopCarousel() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

// Iniciar carrusel
if (imagenes.length > 0) {
    startCarousel();
    
    // Pausar carrusel em dispositivos móveis quando o usuário interage
    //const imageContainer = document.querySelector('.image-container');
    //if (imageContainer) {
    //    imageContainer.addEventListener('touchstart', () => {
    //        stopCarousel();
     //       // Reiniciar após 10 segundos sem interação
     //       setTimeout(() => {
     //           if (!intervalId) startCarousel();
     //       }, 10000);
     //   });
    //}
}

// Otimização para dispositivos móveis - reduzir animações se preferir
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Usuário prefere menos animações
    const escondidos = document.querySelectorAll('.escondido');
    escondidos.forEach(el => {
        el.style.transition = 'none';
        el.classList.add('revelar');
    });
}