// 1) If/else — Maioridade simples
let idade = 16;
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}


// 2) If/else — Nota escolar 
let nota = 6;
if ( nota >= 7) {
 console.log("Aprovado");
} else if (nota >= 5, nota < 7) {
 console.log("Recuperação");
} else {
 console.log("Reprovado");
}


// 3) Switch — Dia da semana
let dia = 3;
switch (dia) {
 case 1: console.log("Domingo"); break;
 case 2: console.log("Segunda-Feira"); break;
 case 3: console.log("Terça-Feira"); break;
 case 4: console.log("Quarta-Feira"); break;
 case 5: console.log("Quinta-Feira"); break;
 case 6: console.log("Sexta-Feira"); break;
 case 7: console.log("Sábado"); break;
 default: console.log("Dia inválido");
}


// 4) Switch — Mini calculadora
let a = 10, b = 2;
let op = '+';
let resultado;
switch (op) {
 case '+': resultado = a + b;
 break;
 case '-': resultado = a - b;
 break;
 case '*': resultado = a * b;
 break;
 case '/':
 if (b===0) {
 console.log("Não é permitido número 0");
 resultado = undefined;
 } else {
 resultado = a / b;
 }
 break;
 default:
 console.log("Operador Inválido");
 resultado = undefined;
 }
if (resultado !== undefined) {
 console.log("resultado:", resultado);
}
