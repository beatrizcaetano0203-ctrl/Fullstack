const n1 = 2;
const n2 = 3;

// const verificador = n1 > n2 ? "MAIOR" : "MENOR OU IGUAL";

// if(n1 > n2) {
//   console.log("MAIOR");
// } else {
//   console.log("MENOR OU IGUAL");
// }

const verificar = (n1, n2) => n1 > n2 ? "MAIOR" : "MENOR OU IGUAL";

const classificar = x =>
  x > 10
    ? "MAIOR QUE 10"
    : x > 5
    ? "entre 6 e 10"
    : x > 0
    ? "entre 1 e 5"
    : "zero ou negativo"; 
console.log(verificar(n1, n2));
console.log(verificar(2, 4));
console.log(verificar(6, 4));
console.log(classificar(12));