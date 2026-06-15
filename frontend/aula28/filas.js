/*
  Filas (Queue) - explicação:

  - O que é uma fila?
    Imagine a fila do caixa do supermercado: a primeira pessoa que entra na fila
    é a primeira a ser atendida. Isso se chama FIFO: First In, First Out
    (primeiro a entrar, primeiro a sair).

  - Operações comuns nesta implementação:
    - enqueue(elemento): adiciona um elemento ao final da fila.
    - dequeue(): remove e retorna o elemento que está no início da fila.
    - front(): mostra quem está na frente sem remover.
    - isEmpty(): verifica se a fila está vazia.
    - tamanho(): retorna quantos itens existem na fila.
*/

class Fila {
  constructor() {
    this.itens = [];
  }
  // Método 'enqueue' recebe um 'elemento' e o coloca no final da fila.
  enqueue(elemento) {
    // 'push' adiciona o elemento ao final do array 'itens'.
    this.itens.push(elemento);
  }

  // Método 'dequeue' remove e retorna o primeiro elemento da fila.
  dequeue() {
    // 'shift' remove o primeiro item do array e o retorna.
    return this.itens.shift();
  }
  // Método 'front' retorna (sem remover) o elemento que está na frente.
  front() {
    return this.itens[0];
  }

  // Método 'isEmpty' verifica se a fila está vazia.
  isEmpty() {
    // Se o comprimento do array for 0, a fila está vazia.
    return this.itens.length === 0;
  }

  // Método 'tamanho' retorna quantos elementos existem na fila.
  tamanho() {
    // 'length' retorna o número de itens no array.
    return this.itens.length;
  }
}

// Cria uma nova fila vazia chamando o construtor da classe.
const fila = new Fila();

fila.enqueue("João");
fila.enqueue("Maria");
fila.enqueue("Pedro");

console.log(fila.front());
console.log(fila.dequeue());
console.log(fila.front());
console.log(fila.dequeue());
console.log(fila.front());
console.log(fila.dequeue());
console.log(fila.front());
console.log(fila.isEmpty());