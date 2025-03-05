/*
🔹 Tipos de Operadores em JavaScript
Os principais operadores em JS são:
1️⃣ Aritméticos → Para cálculos matemáticos.
2️⃣ Atribuição → Para armazenar valores em variáveis.
3️⃣ Comparação → Para verificar se valores são iguais ou diferentes.
4️⃣ Lógicos → Para criar condições mais avançadas.
5️⃣ Bitwise → Para operações com bits.
6️⃣ Ternário → Para simplificar condicionais.
7️⃣ Typeof & Delete → Para checar tipos e excluir propriedades.

Agora, vamos ver cada um com exemplos práticos! 🚀

🔹 1. Operadores Aritméticos
Usados para cálculos matemáticos.

Operador	Descrição	Exemplo
+	Adição	10 + 5 // 15
-	Subtração	10 - 5 // 5
*	Multiplicação	10 * 5 // 50
/	Divisão	10 / 5 // 2
%	Módulo (resto)	10 % 3 // 1
**	Exponenciação	2 ** 3 // 8
Exemplo Prático:
javascript
Copiar
Editar
let a = 10, b = 3;
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.3333...
console.log(a % b);  // 1 (resto da divisão)
console.log(a ** b); // 1000 (10³)
🔹 2. Operadores de Atribuição
Usados para armazenar valores em variáveis.

Operador	Equivalente a	Exemplo
=	Atribuição	x = 10
+=	Soma e atribui	x += 5 // x = x + 5
-=	Subtrai e atribui	x -= 5 // x = x - 5
*=	Multiplica e atribui	x *= 5 // x = x * 5
/=	Divide e atribui	x /= 5 // x = x / 5
%=	Módulo e atribui	x %= 5 // x = x % 5
Exemplo:
javascript
Copiar
Editar
let x = 10;
x += 5;  // x = x + 5 → x agora é 15
x *= 2;  // x = x * 2 → x agora é 30
console.log(x);  // 30
🔹 3. Operadores de Comparação
Usados para comparar valores (retornam true ou false).

Operador	Descrição	Exemplo
==	Igualdade (com conversão de tipo)	5 == "5" // true
===	Igualdade estrita (sem conversão)	5 === "5" // false
!=	Diferente	5 != "5" // false
!==	Diferente estrito	5 !== "5" // true
>	Maior que	10 > 5 // true
<	Menor que	10 < 5 // false
>=	Maior ou igual	10 >= 10 // true
<=	Menor ou igual	10 <= 5 // false
Exemplo:
javascript
Copiar
Editar
console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(10 == "10");  // true (compara valores, não tipos)
console.log(10 === "10"); // false (compara valores e tipos)
🔹 4. Operadores Lógicos
Usados para combinar condições.

Operador	Descrição	Exemplo
&&	E (true se ambas as condições forem verdadeiras)	(10 > 5) && (5 < 8) // true
`		`
!	NÃO (inverte o valor lógico)	!(10 > 5) // false
Exemplo:
javascript
Copiar
Editar
let idade = 20;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir.");
}
🔹 5. Operadores Bitwise (Avançado)
São usados para manipulação de bits (0s e 1s).

Operador	Descrição
&	        AND bit a bit
`	        `
^	        XOR bit a bit
~	        NOT bit a bit
<<	        Deslocamento à esquerda
>>	        Deslocamento à direita
Exemplo:
javascript
Copiar
Editar
console.log(5 & 1); // 1 (0101 & 0001 = 0001)
console.log(5 | 1); // 5 (0101 | 0001 = 0101)
🔹 6. Operador Ternário (Condicional Simples)
Simplifica if-else em uma linha.

Sintaxe:

javascript
Copiar
Editar
condicao ? valor_se_verdadeiro : valor_se_falso;
Exemplo:
javascript
Copiar
Editar
let idade = 18;
let mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(mensagem); // "Maior de idade"
🔹 7. typeof e delete
typeof → Descobre o tipo de uma variável.
delete → Remove propriedades de objetos.
Exemplo:
javascript
Copiar
Editar
let nome = "João";
console.log(typeof nome); // "string"

let pessoa = { nome: "Maria", idade: 30 };
delete pessoa.idade;
console.log(pessoa); // { nome: "Maria" }
🔹 Resumo
✔ Aritméticos: +, -, *, /, %, **
✔ Atribuição: =, +=, -=, *=, /=, %=
✔ Comparação: ==, ===, !=, !==, >, <, >=, <=
✔ Lógicos: &&, ||, !
✔ Bitwise: &, |, ^, ~, <<, >>
✔ Ternário: condicao ? verdadeiro : falso
✔ Extras: typeof, delete
*/