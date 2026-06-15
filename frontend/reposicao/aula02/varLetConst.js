var n1 = 3;
var n1 = 5;
let n2 = 10;
n2 = 20;
const n3 = 30;
n3 = 40; // ERRO!0

if(true){
  var n1 = 100;
  // n2 = 200;
  let n2 = 15;
  console.log(n2); // 15
}

console.log(n1); // 100
console.log(n2); // 200