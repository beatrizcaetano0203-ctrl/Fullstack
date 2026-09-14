/*
  Pilhas (Stack) - explicação para leigos:

  - O que é uma pilha?
    Imagine uma pilha de pratos: você coloca pratos no topo e também os tira
    pelo topo. Quem entrou por último é o primeiro a sair. Isso se chama LIFO:
    Last In, First Out (último a entrar, primeiro a sair).

  - Operações comuns nesta implementação:
    - push(elemento): coloca um elemento no topo da pilha.
    - pop(): remove e retorna o elemento do topo.
    - peek(): mostra o elemento do topo sem remover.
    - isEmpty(): verifica se a pilha está vazia.
    - tamanho(): retorna quantos itens existem na pilha.

  Os comentários abaixo explicam cada linha do código para iniciantes.
*/

// Declara uma classe chamada 'Pilha' que contém a lógica da pilha.
class Pilha {
  // Construtor executado ao criar uma nova instância: 'new Pilha()'.
  constructor() {
    // 'itens' é um array que guarda os elementos da pilha em ordem.
    // O final do array representa o topo da pilha.
    this.itens = [];
  }

  // Método 'push' adiciona um elemento ao topo da pilha.
  push(elemento) {
    // Usamos 'push' do array para colocar o elemento no final (topo).
    this.itens.push(elemento);
  }

  // Método 'pop' remove e retorna o elemento do topo da pilha.
  pop() {
    // 'pop' do array remove o último elemento (topo) e o retorna.
    return this.itens.pop();
  }

  // Método 'peek' retorna (sem remover) o elemento que está no topo.
  peek() {
    // Acessamos o último índice do array: length - 1 é a posição do topo.
    return this.itens[this.itens.length - 1];
  }

  // Método 'isEmpty' verifica se a pilha está vazia.
  isEmpty() {
    // Se o tamanho do array for 0, não há itens na pilha.
    return this.itens.length === 0;
  }

  // Método 'tamanho' retorna quantos elementos existem na pilha.
  tamanho() {
    return this.itens.length;
  }
}

// Cria uma nova pilha vazia chamando o construtor da classe.
const pilha = new Pilha();

// Coloca o elemento "A" no topo da pilha.
pilha.push("A");

// Coloca o elemento "B" no topo da pilha (agora B fica acima de A).
pilha.push("B");

// Coloca o elemento "C" no topo da pilha (C será o primeiro a sair).
pilha.push("C");

// Mostra no console qual é o elemento no topo sem removê-lo (deve ser C).
console.log(pilha.peek());

// Remove e mostra o elemento do topo (remove C e mostra C).
console.log(pilha.pop());

// Mostra o novo topo da pilha após a remoção anterior (agora será B).
console.log(pilha.peek());

// Mostra quantos elementos restam na pilha.
console.log(pilha.tamanho());