// Condição Aninhada
var idade = 66

if (idade < 16) {
    console.log("Não vota")
} else if (idade < 18 || idade > 65) {
    console.log("Voto opcional")
} else {
    console.log("Voto obrigatório")
}

// Condição Múltipla
/*
switch (expressao) {
    case valor1:

        break
    case valor2:

        break
    case valor3:

        break
    default:

        break
};
*/

var agora = new Date() // Pega a data atual
var diasem = agora.getDay() // Pega o dia da semana atual em número

console.log(diasem)

switch(diasem) {
    case 0:
        console.log("Domingo")
        break
    case 1:
        console.log("Segunda")
        break
    case 2:
        console.log("Terça")
        break
    case 3:
        console.log("Quarta")
        break
    case 4:
        console.log("Quinta")
        break
    case 5:
        console.log("Sexta")
        break
    case 6:
        console.log("Sábado")
        break
    default:
        console.log("DIA INVÁLIDO")
        break
}