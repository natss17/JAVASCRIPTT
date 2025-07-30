// script.js

// Variáveis
let nome = "Juliana"
let idade = 24 
let valor = prompt("Digite um valor")
// Concatenação 
console.log("Meu nome é", nome, "e tenho", idade, "anos")
console.log(valor)

// Operações aritméticas 
let num1 = 2
let num2 = 3

let soma = num1 + num2 
let subtracao = num1 - num2 
let multiplicacao = num1 * num2 
let divisao = num1 / num2
let resto = num1 % num2 

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
console.log(resto)

// Operadores relacionais
let valor1 = 10
let valor2 = 5
console.log(valor1 > valor2)
console.log(valor1 >= valor2)
console.log(valor1 < valor2)
console.log(valor1 <= valor2)
console.log(valor1 == valor2)
console.log(valor1 != valor2)

// Estrutura condicional 
let idade1 = 18
if (idade1 >= 18) {
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade")
}

let numero = Number(prompt("Digite um número:"))
if (numero > 0) {
    console.log("É maior que 0")
} else if (numero < 0) {
    console.log("É menor que 0")
} else {
    console.log("O número é 0")
}

// Operadores lógicos 
let alunoSesi = true 
let ensinoMedio = true // Corrigido: "ensinoMédio" -> "ensinoMedio" (nomes com acento são válidos, mas evitados)

if (alunoSesi && ensinoMedio) {
    console.log("Pode fazer o técnico")
} else {
    console.log("Não pode fazer o técnico")
}

let numero1 = Number(prompt("Informe um número"))
if (numero1 >= 10 && numero1 <= 20) {
    console.log("Está entre 10 e 20")
}

// CORREÇÃO AQUI: deveria ser "||" (OU) em vez de "&&" (E)
let numero2 = Number(prompt("Informe outro número"))
if (numero2 == 10 || numero2 == 20) {
    console.log("O número é 10 ou 20")
}

// Switch case
let opcao = 2
switch (opcao) {
    case 1:
        console.log("Você escolheu a opção 1")
        break
    case 2:
        console.log("Você escolheu a opção 2")
        break
    case 3:
        console.log("Você escolheu a opção 3")
        break
    default:
        console.log("Opção inválida")
}

let letra = "a"
switch (letra) {
    case "a":
        console.log("Vogal")
        break
    case "b":
    case "c": // Corrigido: "c" era tratado incorretamente
        console.log("Consoante")
        break
    default:
        console.log("Não é uma letra válida")
}

// Laço de repetição
let numero3 = 1 
while (numero3 <= 10) {
    console.log(numero3)
    numero3 += 1
}

// CORREÇÃO AQUI: "numero4" não foi declarado — deve ser "numero3" ou criar "let numero4"
let numero4 = 1
let resposta2 = "sim" // Corrigido: valor inicial diferente de "não" para entrar no laço
while (resposta2 !== "não") {
    resposta2 = prompt("Deseja continuar? (sim/não)")
    console.log(numero4)
    numero4 += 1
}

// While com prompt de saída
let resposta = "não"
while (resposta == "não") {
    resposta = prompt("Deseja sair? (sim/não)")
}

// Laço de repetição - do while
let contador = 0
do {
    console.log("Contador:", contador)
    contador++
} while (contador < 5)

// Laço de repetição - for
for (let contador1 = 1; contador1 <= 5; contador1++) {
    console.log("For Contador:", contador1);
}

// Array
let frutas = ["maçã", "banana", "laranja"];

console.log("Tamanho do array:", frutas.length); // tamanho do array

frutas.push("uva");       // adiciona no final
frutas.pop();             // remove o último
frutas.shift();           // remove o primeiro
frutas.unshift("manga");  // adiciona no início

// Percorrendo o array com for
for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta:", frutas[i])
}