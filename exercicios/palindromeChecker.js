let palavra = prompt ("Escreva uma palavra:");
let palavraInvertida = palavra.split("").reverse().join("");
console.log (palavra);

if (palavra === palavraInvertida) {
  console.log ("Essa palavra é um palíndromo.");
}
else {
  console.log ("Não é um palíndromo!")
}