let paso = 1

document.addEventListener('DOMContentLoaded', function() {
    iniciarApp()
})

function iniciarApp() {
    
    tabs() // Cambia la seccion cuando se presionen los tabs
}

function mostrarSeccion() {
    console.log('Mostrando seccion');
    
}

function tabs() {
    const botones = document.querySelectorAll('.tabs button')
    botones.forEach( boton => {
        boton.addEventListener('click', (event) => {
            paso = parseInt( event.target.dataset.paso )
            mostrarSeccion()
            
        })
    })
    
}