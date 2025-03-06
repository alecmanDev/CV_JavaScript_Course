/*💡 Desafio Difícil: "Calculadora Simples" 🧮
Crie um código que:

Peça ao usuário dois números.
Peça ao usuário para escolher uma operação:
+ para soma
- para subtração
* para multiplicação
/ para divisão
Use operadores aritméticos para calcular o resultado.
Exiba o resultado no console e com um alert().
📌 Exemplo de Entrada e Saída
Entrada:

primeiro número: 10
Digite o segundo número: 5
Escolha a operação (+, -, *, /): *
Saída esperada:


O resultado da multiplicação é: 50
(E também mostrar essa mensagem no alert())*/

var num1 = Number(prompt("Digite um número : "))
var num2 = Number(prompt("Digite mais um número: "))

resSoma = num1 + num2
resSubt = num1 - num2
resMulti = num1 * num2
resDiv = num1 / num2

alert(`O resultado da operação de soma de ${num1} e ${num2}: ${resSoma}\n O resultado da operação da subtração de ${num1} e ${num2}: ${resSubt}\nO resultado da operação de multiplicação de ${num1} e ${num2}: ${resMulti}\nO resultado da operação da divisão de ${num1} e ${num2}: ${resDiv}`)