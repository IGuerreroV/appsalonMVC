document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
})

function iniciarApp() {
    buscarPorFecha();
}

function buscarPorFecha() {
    const fechaInput = document.querySelector('#fecha')
    fechaInput.addEventListener('input', (event) => {
        const fechaSeleccionada = event.target.value

        window.location = `?fecha=${fechaSeleccionada}`
    })
}