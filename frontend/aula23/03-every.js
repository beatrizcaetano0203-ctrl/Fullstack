// Exemplo simples de Array.prototype.every (PT-BR)

// Verifica se TODOS os números do array são maiores que 0
const numeros = [2, 5, 1, 9];
const palavras = ["casa", "carro", "pato", "cadeira"];

const todosSaoPositivos = numeros.every((numero) => numero > 0);

console.log("Números:", numeros);
console.log("Todos são positivos?", todosSaoPositivos);

const todasComC = palavras.every((palavra) => palavra.startsWith("c"));

console.log("Palavras:", palavras);
console.log("Todas começam com 'c'?", todasComC);