// Introdução o DOM

/*
Dentro da árvore DOM, podemos selcecionar alguns elemetos:
por Marca(Tag), por ID, por Nome, por Classe, por Seletor
*/

// Por Marca
// getElementByTagName()

var p1 = document.getElementsByTagName('p')[0] // Seleciona o primeiro parágrafo

var p2 = document.getElementsByTagName('p')[1] // Seleciona o segundo parágrafo

window.document.write("Está escrito assim: " + p1.innerHTML)
p1.style.color = "blue"

alert(p1.innerText)


// Por ID
// getElementById()

var d = window.document.getElementById('mensagem')

d.style.backgroundColor = "gray"
d.style.padding = "5rem"
d.style.borderRadius = "10rem"


// Por Nome
// getElementsByName

var f = window.document.getElementsByName('msg-2')[0]

f.innerText = "Olá"

// Por Classe

// Por Seletor
var g = document.querySelector('div#teste')

g.style.backgroundColor = 'red'
g.style.borderRadius = '2rem'
g.style.padding = '5rem'
g.style.color = 'white'