// Tratamento de dados
var nome = window.prompt("Qual o seu nome")
window.alert("É um grande prazer em te conhecer, " + nome)

document.write(`UAU, <strong>${nome}</strong>, seu nome tem ${nome.length} letras`)

document.write(`Seu nome em MAÍUSCULO é ${nome.toUpperCase()}`)

document.write(`Seu nome em minúscula é ${nome.toLowerCase()}`)

//Soma de dois números
var n1 = Number(window.prompt("Digite um número: "))
var n2 = Number(window.prompt("Digite mais um número: "))
s = n1 + n2
window.alert("A soma de " + n1 + " e " + n2 + " é igual a " + (n1 + n2))

/* 
=========================================================================
Conversão de tipos

Number.parseInt(n)
Number.parseFloat(n)
Number(n)

=========================================================================
Tratamento de dados: string

name.length        --> quantos caracteres a string tem
name.toUpperCase() --> tudo para 'MAIÚSCULAS'
name.toLowerCase() --> tudo para 'minúsculas'

=========================================================================
Tratamento de dados: número
n1.toFixed(2)                   --> Define casas decimais
n1.toFixed(2).replace('.', ',') --> Troca um valor por outro

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) --> Converte o valor para valor real brasileiro

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'}) --> Converte o valor para valor Dólar

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'}) --> Converte o valor para valor Euro

*/

// Formatando Strings

console.log(`A soma de ${n1} e ${n2} é igual a ${s}`)