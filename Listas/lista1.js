// 1 - Adivinhar o número
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let palpite = parseInt(prompt("Adivinhe um número entre 1 e 10:"));
if (palpite === numeroSecreto) {
  alert("Parabéns! Você acertou!");
} else {
  alert(`Errado! O número era ${numeroSecreto}`);
}

// 2 - Arredondando valores
let decimal = parseFloat(prompt("Digite um número decimal:"));
alert(`Arredondado para cima: ${Math.ceil(decimal)}`);
alert(`Arredondado para baixo: ${Math.floor(decimal)}`);
alert(`Arredondado normalmente: ${Math.round(decimal)}`);

// 3 - Manipulando números
let numeros = [];
for (let i = 1; i <= 10; i++) {
  let valor = parseFloat(prompt(`Digite o número ${i} de 10:`));
  numeros.push(valor);
}
alert(`Maior número: ${Math.max(...numeros)}`);
alert(`Menor número: ${Math.min(...numeros)}`);

// 4 - Novos valores
let numeroBase = parseFloat(prompt("Digite um número para cálculos:"));
alert(`Valor absoluto: ${Math.abs(numeroBase)}`);
alert(`Elevado à 4ª potência: ${Math.pow(numeroBase, 4)}`);
alert(`Raiz quadrada: ${Math.sqrt(numeroBase)}`);

// Datas

// 1 - Mostrando a data
let hoje = new Date();
console.log(`Data atual: ${hoje.toLocaleDateString()}`);

// 2 - Dias até o aniversário
let aniversario = new Date(hoje.getFullYear(), 9, 10); // Ex: 10 de outubro
if (aniversario < hoje) {
  aniversario.setFullYear(hoje.getFullYear() + 1);
}
let diferenca = aniversario - hoje;
let diasRestantes = Math.ceil(diferenca / (1000 * 60 * 60 * 24));
alert(`Faltam ${diasRestantes} dias para o seu aniversário.`);
