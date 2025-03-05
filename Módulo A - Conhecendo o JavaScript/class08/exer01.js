/* 💡 Desafio Fácil: "Contador de Anos Restantes"
Crie um código que:

Peça ao usuário para inserir sua idade atual.
Calcule quantos anos faltam para chegar aos 100 anos.
Exiba a mensagem no console:
plaintext
Copiar
Editar
"Faltam X anos para você completar 100 anos!"
Utilize operadores aritméticos (-), operadores de atribuição (=) e operadores de incremento (++). */

idade = Number(prompt("Digite sua idade: "))


res = idade > 100 ? 'Você tem mais que 100 anos' : 'Você não tem 100 anos'
faltam_idade = 100 - idade

alert(String(res) + ` Falta ${faltam_idade} de idade para alcançar os 100 anos de idade`)