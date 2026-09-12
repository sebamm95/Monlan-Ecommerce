const header = document.querySelector('header');
const main = document.querySelector('main');
const headerHeight = header.offsetHeight;

function actualizarHeader() {
    // Distancia entre el borde superior del main y el tope de la pantalla
    const distancia = main.getBoundingClientRect().top;

    // Convertimos esa distancia en un valor de opacidad entre 0 y 1
    let opacidad = distancia / headerHeight;
    opacidad = Math.max(0, Math.min(2, opacidad));

    header.style.opacity = opacidad;
    // Evita que el header (invisible) siga siendo "clickeable"
    header.style.pointerEvents = opacidad === 0 ? 'none' : 'auto';
}

window.addEventListener('scroll', actualizarHeader, { passive: true });