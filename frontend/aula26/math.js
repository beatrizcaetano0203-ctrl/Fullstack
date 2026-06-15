// console.log(Math.PI);
let raio = 8;
const area = Math.PI * Math.pow(raio, 2);

const min = 500;
const max = 100;

console.log("Área do círculo:", area.toFixed(2));

const raizQuadrada = Math.sqrt(16);
console.log("Raiz quadrada de 16:", raizQuadrada);

let x = Math.floor(4.8);
let y = Math.ceil(4.2);
let z = Math.round(4.5);
console.log("y:", y);
console.log("x:", x);
console.log("z:", z);

let a = Math.floor(Math.random() * 100) + 1;
console.log(a);

function gerarAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(
  `Número aleatório entre ${min} e ${max}: ${gerarAleatorio(min, max)}`,
);

const numeros = [20, 309, 40, 5, 78, -2, 0];

let abs = Math.abs(-10);
let minValue = Math.min(5, 10, -3, 7);
let maxValue = Math.max(...numeros);

console.log("Valor absoluto de -10:", abs);
console.log("Menor valor entre 5, 10, -3 e 7:", minValue);
console.log("Valor máximo entre os números:", maxValue);
