(function(){
  console.log("Função anônima auto-invocada");
})();

// const anonima = function() {
//   console.log("Função anônima atribuída a uma variável");
// };

// const anonima = frase => console.log(frase);
const anonima = frase => frase;

// anonima("Função anônima atribuída a uma variável");
console.log(anonima("Função anônima atribuída a uma variável com retorno"));