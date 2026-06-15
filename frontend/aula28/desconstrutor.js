const numeros = [1, 2, 3, 4, 5];
// const a = numeros[0];
// const b = numeros[1];
// const c = numeros[2];
// const d = numeros[3];
// const e = numeros[4];
const [a, b, c, d, e] = numeros;

console.log(a, b, c, d, e);

const pessoa = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo",
};

const { nome, idade, cidade } = pessoa;

console.log(nome, idade, cidade);