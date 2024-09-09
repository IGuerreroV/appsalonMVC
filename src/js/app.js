let paso = 1;
const pasoInicial = 1;
const pasoFinal = 3;

const cita = {
  nombre: '',
  fecha: '',
  hora: '',
  servicios: []
}

document.addEventListener('DOMContentLoaded', function () {
  iniciarApp();
});

function iniciarApp() {
  mostrarSeccion(); // Muetsra y oculta las secciones segun el paso
  tabs(); // Cambia la seccion cuando se presionen los tabs
  botonesPaginador(); // Agrega o quita los botones del paginador
  paginaSiguiente(); // Cambia de paso al siguiente
  paginaAnterior(); // Cambia de paso al anterior

  consultarAPI(); // Consulta la API en el backend de PHP

  nombreCliente();
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
      botonesPaginador();
    });
  });
}

function botonesPaginador() {
  const paginaAnterior = document.querySelector('#anterior');
  const paginaSiguiente = document.querySelector('#siguiente');

  if(paso === 1) {
    paginaAnterior.classList.add('ocultar');
    paginaSiguiente.classList.remove('ocultar');
  } else if (paso === 3) {
    paginaAnterior.classList.remove('ocultar');
    paginaSiguiente.classList.add('ocultar');
  } else {
    paginaAnterior.classList.remove('ocultar');
    paginaSiguiente.classList.remove('ocultar');
  }

  mostrarSeccion();
}

function paginaAnterior() {
  const paginaAnterior = document.querySelector('#anterior');
  paginaAnterior.addEventListener('click', () => {
    if(paso <= pasoInicial) return;
    paso--;

    botonesPaginador();
  })
}

function paginaSiguiente() {
  const paginaSiguiente = document.querySelector('#siguiente');
  paginaSiguiente.addEventListener('click', () => {
    if (paso >= pasoFinal) return;
    paso++;

    botonesPaginador();
  });
}

async function consultarAPI() {
  try {
    const url = 'http://localhost:3000/api/servicios';
    const resultado = await fetch(url);
    const servicios = await resultado.json();
    mostrarServicios(servicios);
    
  } catch (error) {
    console.log(error);
  }
}

function mostrarServicios(servicios) {
  servicios.forEach(servicio => {
    const { id, nombre, precio } = servicio;

    // DOM scripting
    const nombreServicio = document.createElement('P')
    nombreServicio.classList.add('nombre-servicio')
    nombreServicio.textContent = nombre

    const precioServicio = document.createElement('P')
    precioServicio.classList.add('precio-servicio')
    precioServicio.textContent = `$${precio}`

    const divServicio = document.createElement('DIV')
    divServicio.classList.add('servicio')
    divServicio.dataset.idServicio = id
    divServicio.onclick = function() {
      seleccionarServicio(servicio);
    }

    divServicio.appendChild(nombreServicio)
    divServicio.appendChild(precioServicio)

    document.querySelector('#servicios').appendChild(divServicio)
  })
}

function seleccionarServicio(servicio) {
  const { id } = servicio
  const { servicios } = cita

  // Identificar el elemento al que se le dio click
  const divServicio = document.querySelector(`[data-id-servicio="${id}"]`);

  // Verificar si el servicio ya esta seleccionado
  if( servicios.some(agregado => agregado.id === id)) {
    // Eliminar el servicio del arreglo
    cita.servicios = servicios.filter(agregado => agregado.id !== id)
    divServicio.classList.remove('seleccionado');
  } else {
    // Agregar el servicio al arreglo
    cita.servicios = [...servicios, servicio];
    divServicio.classList.add('seleccionado');
  }
  console.log(cita);
}

function nombreCliente() {
  cita.nombre = document.querySelector('#nombre').value
}
