function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const pessoa1 = new Pessoa("Alice", 30);
const pessoa2 = new Pessoa("Bob", 25);

pessoa1.nome = "Teste";

console.log(pessoa1);
