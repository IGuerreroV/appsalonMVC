let paso = 1;

document.addEventListener('DOMContentLoaded', function () {
  iniciarApp();
});

function iniciarApp() {
  mostrarSeccion(); // Muetsra y oculta las secciones segun el paso
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

  // Eliminar la clase de actual en el tab anterior
  const tabAnterior = document.querySelector('.actual')
  if(tabAnterior) {
    tabAnterior.classList.remove('actual')
  }

  // Resalta el tab actual
  const tab = document.querySelector(`[data-paso="${paso}"]`)
  tab.classList.add('actual');
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
