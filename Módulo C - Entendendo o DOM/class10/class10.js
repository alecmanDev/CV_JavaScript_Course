// Eventos DOM (Document Object Model)

// Eventos com mouse
/* Movimento do mouse sobre algum espaço (div, p, section, etc) no HTML 

- mouseenter
- mousemove
- mousedown
- click
- mouseout

*/

// Funções

/*

function exemple(param) {

}

*/
var a = document.getElementById('area')

// Para evitar poluição no documento HTML, faazemos o uso do addEventListener()
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.innerText = 'Clicou!'
    a.style.backgroundColor = 'yellow'
}

function entrar() {
    a.innerText = 'Entrou'
    a.style.backgroundColor = 'green'
}

function sair() {
    a.innerText = 'Saiu'
    a.style.backgroundColor = 'red'
}