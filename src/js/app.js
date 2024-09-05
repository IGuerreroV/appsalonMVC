let paso = 1;

document.addEventListener('DOMContentLoaded', function () {
  iniciarApp();
});

function iniciarApp() {
  tabs(); // Cambia la seccion cuando se presionen los tabs
}

function mostrarSeccion() {
  // Ocultar la seccion anterior
  const seccionAnterior = document.querySelector('.mostrar');
  if (seccionAnterior) {
    seccionAnterior.classList.remove('mostrar');
  }

  // Sleccionar la seccion con el paso actual
  const pasoSelector = `#paso-${paso}`;
  const seccion = document.querySelector(pasoSelector);
  seccion.classList.add('mostrar');
}

function tabs() {
  const botones = document.querySelectorAll('.tabs button');
  botones.forEach((boton) => {
    boton.addEventListener('click', (event) => {
      paso = parseInt(event.target.dataset.paso);
      mostrarSeccion();
    });
  });
}
