/*
📌 Enunciado:
Crie um programa onde o usuário:

Insira seu ano de nascimento.
O programa calcula sua idade e diz se você é criança (até 12 anos), adolescente (13-17), adulto (18-59) ou idoso (60+).
Se o usuário não digitar um número válido, exiba um erro e peça para digitar novamente.
💡 Regras:

Utilize prompt() para obter os valores.
Converta os valores corretamente para número (Number()).
Utilize condições (if e else) para classificar a idade.
*/

let ano_nascimento;
let ano_atual = new Date().getFullYear(); // Obtém o ano atualmente

while (true) {
    ano_nascimento = Number(prompt("Insira seu ano de nascimento: "))

    if (!isNaN(ano_nascimento) && ano_nascimento > 1900 && ano_nascimento <= ano_atual)
        break
    else {
        alert("Insira um ano de nascimento válido")
    }
}

let idade = ano_atual - ano_nascimento

if (idade <= 12) {
    alert(`Voçê tem ${idade} anos o que lhe qualifica com uma criança`)
} else if (idade <= 17) {
    alert(`Voçê tem ${idade} anos o que lhe qualifica com um adolecente`)
} else if (idade <= 59) {
    alert(`Voçê tem ${idade} anos o que lhe qualifica com um adulto`)
} else {
    alert(`Voçê tem ${idade} anos o que lhe qualifica com um idoso`)
}