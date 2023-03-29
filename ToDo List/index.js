const fecha = document.querySelector('#fecha')
const lista = document.querySelector('#lista')
const elemento = document.querySelector('#elemento')
const input = document.querySelector('#input')
const botonEnter = document.querySelector('#enter')
const check = 'fa-check-circle'
const uncheck = 'fa-circle'
const lineThrough = 'line-through'

let id // para que inicie en 0 cada tarea tendra un id diferente

function agregarTarea(tarea, id, realizado, eliminado) {
	
	if (eliminado) return // si existe eliminado es true si no es false
	
	const REALIZADO = realizado ? check : uncheck
	const LINE = realizado ? lineThrough : ''


	const elemento = `
                        <li id="elemento">
                        <i class="far fa-circle co" data="realizado" id="${id}"></i>
                        <p class="text ${LINE}">${tarea}</p>
                        <i class="fas fa-trash de" data="eliminado" id="${id}"></i> 
                        </li>
                    `
	lista.insertAdjacentHTML('beforeend', elemento)
}

// funcion de Tarea Realizada

function tareaRealizada(element) {
	element.classList.toggle(check)
	element.classList.toggle(uncheck)
	element.parentNode.querySelector('.text').classList.toggle(lineThrough)
	LIST[element.id].realizado = LIST[element.id].realizado ? false : true //Si
	// console.log(LIST)
	// console.log(LIST[element.id])
	// console.log(LIST[element.id].realizado)
}

function tareaEliminada(element) {
	// console.log(element.parentNode)
	// console.log(element.parentNode.parentNode)
	element.parentNode.parentNode.removeChild(element.parentNode)
	LIST[element.id].eliminado = true
	console.log(LIST)
}

botonEnter.addEventListener('click', () => {
	const tarea = input.value
	if (tarea) {
		agregarTarea(tarea,id,false,false)
	}
	input.value = ''
	id++
})

document.addEventListener('keyup', (event) => {
	if (event.key == 'Enter') {
		const tarea = input.value
		if (tarea) {
			agregarTarea(tarea,id,false,false)
		}
		input.value = ''
		id++
	}
})

lista.addEventListener('click', (event)=>{
	const element = event.target
	const elementData = element.attributes.data.value
	/* 
	console.log(element)
	console.log(element.attributes)
	console.log(element.attributes.data)
	console.log(element.attributes.data.value) 
	*/
	if(elementData == 'realizado'){
		tareaRealizada(element)
	}
	if(elementData == 'eliminado'){
		tareaEliminada(element)
	}
})