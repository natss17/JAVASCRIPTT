//script.js
///entrada de dados- prompt
let nome = prompt ("Qual seu nome?")
console.log("Meu nome é", nome)
///entrada de dados- value
const input = document.getElementById("input")
const botao = document.getElementById("botao")
const mensagem = document.getElementById("mensagem")

botao.addEventListener("click", () => {
    mensagem.innerText = "olá" + input.value
})

const valor = document.getElementById("valor")
const converter = document.getElementById("converter")
const resultado = document.getElementById("resultado")

converter.addEventListener("click", () => {
    let texto = valor.value
    let numero = Number(texto)
    let dobro = numero * 2
    resultado.innerText = "o dobro é " + dobro
})

//funções de texto
let frase = "Eu gosto de a metamorfose"
console.log(frase)
console.log(frase.length) // conta letras e espaços
console.log(frase.toUpperCase)
console.log(frase.toLowerCase)
console.log(frase.includes("gosto"))
console.log(frase.charAt(5))
console.log(frase.replace("gosto de", "amo"))

//funções matemáticas 
let arrendondado1 = Math.round(4.6)
let arrendondado2 = Math.round(4.2)


let arrendondado3 = Math.floor(5.8)
let arrendondado4 = Math.ceil(5.2)

console.log("round 4.6", arrendondado1)
console.log("round 4.2", arrendondado2)
console.log("floor 5.8", arrendondado3)
console.log("ceil 5.2", arrendondado4)

let maior = Math.max(5, 10, 8, 6, 2, 30)
let menor = Math.min(5, 10, 8, 6, 2, 30)
console.log("maior valor:", maior)
console.log("menor valor:", menor)

let raiz = Math.sqrt(25)
let absoluto = Math.abs(-8)
console.log(raiz)
console.log(absoluto)

//gerar número entre 1 e 10
let aleatorio = Math.floor(Math.random()*10)+1
console.log(aleatorio)

//datas 
const data = document.getElementById("data")
const dataAtual = document.getElementById("dataAtual")

data.addEventListener("click", () => {
    const agora = new Date()
    const dataFormatada = agora.getDate() + "/" +(agora .
        getMonth() +1 ) + "/" + agora.getFullYear ()
        dataAtual.innerText = "hoje é :" + dataFormatada
    
})