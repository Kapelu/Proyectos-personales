const fecha = document.querySelector('#fecha')
const lista = document.querySelector('#lista')
const elemento = document.querySelector('#elemento')
const input = document.querySelector('#input')
const botonEnter = document.querySelector('#enter')

//let id // para que inicie en 0 cada tarea tendra un id diferente

function agregarTarea(tarea, eliminado) {
	if (eliminado) return // si existe eliminado es true si no es false

	const elemento = `
                        <li id="elemento">
                        <i class="far fa-circle co" data="realizado" id="0"></i>
                        <p class="text">${tarea}</p>
                        <i class="fas fa-trash de" data="eliminado" id="0"></i> 
                        </li>
                    `
	lista.insertAdjacentHTML('beforeend', elemento)
}

botonEnter.addEventListener('click', () => {
	const tarea = input.value
	if (tarea) {
		agregarTarea(tarea)
	}
	input.value = ''
})
