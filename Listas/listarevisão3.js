// 1 Função declarativa
function saudacao() {
    console.log("oii! seja bem-vindo(a)!")
}
saudacao()

// 2 Função com parâmetro
function saudacaoComNome(nome) {
    console.log("Olá, " + nome + "!")
}
saudacaoComNome("Nathália")

// 3 Função anônima atribuída
let mostrarMensagem = function() {
    console.log("esta é uma função anônima!")
}
mostrarMensagem()

// 4 Arrow function
const multiplicar = (num1, num2) => {
    return num1 * num2
}
console.log(multiplicar(5, 3))


// DOM MANIPULAÇÃO e DOM EVENTOS esta nos index.html