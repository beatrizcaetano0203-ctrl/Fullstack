const nomes = ["Carlos", "Renato", "Fabiana", "Iasmin", "Pedro", "Antonio", "Gabriela"];

const numeros = [31, 30, 2, 1, 0, 50, 100, 200, 150, 25];

nomes.sort();
numeros.sort((a, b) => a - b);

console.log(numeros);
// console.log(numeros.reverse());
console.log(nomes);
// console.log(nomes.reverse());