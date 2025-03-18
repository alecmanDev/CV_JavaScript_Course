/*
🚀 Próximo desafio (Nível Médio)
📌 Enunciado:
Crie um programa que pergunte ao usuário dois números e depois mostre:

A soma desses números.
O maior número entre eles.
Se a soma é par ou ímpar.
💡 Regras:

Use prompt() para obter os valores.
Converta os valores para número (Number()).
Utilize alert() ou console.log() para exibir os resultados.
*/

n1 = Number(prompt("Me diga um número"))
n2 = Number(prompt("Me diga outro número"))

s = n1 + n2
alert(`A soma de ${n1} e ${n2} é: ${s}`)

if(n1 > n2) {
    alert(`O ${n1} é maior que o ${n2}`)
}
else{
    alert(`O ${n2} é maior que o ${n1}`)
}

if(s % 2 == 0) {
    alert(`O número ${s} é par`)
}
else {
    alert(`O número ${s} é impar`)
}
