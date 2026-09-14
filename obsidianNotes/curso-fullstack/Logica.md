- [ ] [[fullstackSegunda/fullstack/Logica#Variaveis|Variáveis]]

## Variaveis
`````js
let name = "Raphael";
let greeting = "Hello World!"

console.log("My name is " + name + "! " + greeting)

`````

- Var:   Varia mas não tem segurança
	- `````js
	  var name = "Raphael";
	  var name =  "José";
	  `````
- Let: Varia com segurança
	- `````js
	  let name = "Raphael";
	  name =  "José";
	  
	  if (true) {
		  let name = "Ana";
		  name = "Jonas";
	  }
	  
	  name = "Maria";
	  
	  console.log(name);
	  `````
- Const: Não varia e só pode ser modificado indiretamente
	- `````js
	  const name = "Raphael";
	  // name =  "José"; <== JAMAIS USE ASSIM COM O CONST 
	  `````

## Operadores

### Operadores Aritméticos
- **Adição**:  ==+==
- **Subtração** ==-==
- **Multiplicação**:  ==*==
- **Divisão**: ==/==
- **Modulo(Resto)**: ==%==

### Operadores de atribuição
- **Recebe**: =
- **Soma(Adição)**: +=
	- `let n = n + 3`
	- `let n += 3`
- **Subtração**: -=
	- `let n = n - 3`
	- `let n -= 3`
- **Multiplicação**: +=
	- `let n = n * 3`
	- `let n *= 3`
- **Modulo(Resto)**: +=
	- `let n = n % 3`
	- `let n %= 3`

### Operadores de comparação
- `==` Igualdade (converte tipo)
- `===` Igualdade estrita (mesmo tipo e valor)
- `!=` Diferença (converte tipo)
- `!==` Diferença estrita (tipo ou valor diferente)
- `>` Maior que
- `>=` Maior ou igual
- `<` Menor que
- `<=` Menor ou igual

### Operadores Lógicos
- `&&` E (AND): `(5 > 2) && (10 > 5)` -> `true` 
- `||` OU (OR): `(5 > 10) || (2 < 3)` -> `true` 
- `!` NÃO (NOT): `!(5 > 2)` -> `false`

## Condicionais
### `if`, `else if` e `else`

- `if` → executa se a condição for verdadeira.
- `else if` → testa outra condição.
- `else` → executa se nenhuma condição for verdadeira.

```js
let idade = 18;

if (idade >= 18) {
  console.log("Maior de idade");
}
```

```js
let nota = 7;

if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}
```

```js
let nota = 6;

if (nota >= 7) {
  console.log("Aprovado");
} else if (nota < 5) {
  console.log("Reprovado");
} else {
  console.log("Recuperação");
}
```

#### Estrutura

```js
if (condicao) {
  // código
} else if (outraCondicao) {
  // código
} else {
  // código
}
```
### SwitchCase

### `switch case`

- `switch` → analisa um valor.
- `case` → verifica cada opção.
- `break` → encerra o bloco.
- `default` → executa se nenhum caso combinar.

```js
let dia = 2;

switch (dia) {
  case 1:
    console.log("Segunda");
    break;
  case 2:
    console.log("Terça");
    break;
  default:
    console.log("Dia inválido");
}
```

#### Estrutura

```js
switch (valor) {
  case opcao1:
    // código
    break;

  case opcao2:
    // código
    break;

  default:
    // código
}
```


### Function

```javascript
const name = "teste";
function getName(name="Padrão") {
	return name;
}

getName(name);
```
#### Função Anonima

```js
//(function(name="Padrão") {
//	return name;
//})()

((name="Padrão") => name)("João");

const getName = (name="Padrão") {
	return name;
}
```

### Array


```js
const list = [20, "A", true, function()]

list[0]
```

#### Slice

```js
const numeros = [10, 20, 30, 40, 50];

const parte = numeros.slice(1, 4); // Do índice 1 até o índice 4 (não inclusivo)

console.log(parte); // [20, 30, 40]
```
#### Splice

```js
const numeros = [10, 20, 30, 40, 50];

// numeros.splice(2, 0, 35, 37, 100); // A partir do índice 2, remove 0 elementos e adiciona 35, 37 e 100

//splice(posicao, remocao, adicao)

numeros.splice(3, 0, 350);
console.log(numeros);
```


#### Filter

```js
const ages = [32, 33, 16, 40];  
const result = ages.filter((age, index, array) => {
	return age >= 18
});

document.write(result[0]);
```

#### Map e Foreach

```js
const numbers = [32, 33, 16, 40];  
const result = numbers.map((number, index, array) => {
	return "A" + index + " - " + number;
}).forEach((element, index, array) => {
	document.write(element + "<br>");
})
```

#### Reduce

```js
// const numeros = [1, 2, 3, 4, 5];
// const soma = numeros.reduce((acumulador, numero) => {
  //   return acumulador + numero;
// }); 

  // document.write(`A soma dos números é: ${soma} <br>`);

  const letras = ["A", "B", "C", "D", "E"];
  const soma = letras.reduce((acc, letra) => acc + letra);

  // const soma = numeros.reduce((acc, numero) => acc + numero,0);
  // const soma = numeros.reduce((acc, numero) => acc * numero);
  document.write(`A soma das letras é: ${soma} <br>`); // 15
```


### Objetos

#### Exemplo 1 - Objeto simples:
```js
// PESSOA
const pessoa = {
	nome: "Carlos",
	idade: 55,
} 
```

#### Exemplo 2 - Objeto simples:
```js
const pizza = {
  id: 1,
  nome: "Margherita",
  categoria: "pizza",
  descricao: "Pizza bem recheada ...",
  ativa: true,
  // Tamanhos e variações
  tamanho: {
    nome: "Grande",
    diametroCm: 35,
    fatias: 8
  },
  // Bordas
  borda: {
    temBorda: true,
    tipo: "recheada",
    recheio: {
      nome: "Catupiry",
      intensidade: "extra" // leve | normal | extra
    }
  },
  
  sabores: [
    {
      nome: "Calabresa",
      ingredientes: [
        { nome: "Calabresa", quantidade: "120g" },
        { nome: "Cebola", quantidade: "50g" },
        { nome: "Orégano", quantidade: "a gosto" }
      ],
      observacoes: "Sem cebola se quiser."
    },
  ],
  
  preparar() {
    return `Preparando a pizza ${this.nome} de tamanho ${this.tamanho.nome} com massa ${this.massa.tipo}.`;
  }
}
```

### Classes
#### Funcoes Construtoras

```js
function Pessoa(nome, idade) {

  this.nome = nome;
  this.idade = idade;

}

const pessoa1 = new Pessoa("Alice", 30);
const pessoa2 = new Pessoa("Bob", 25);

pessoa1.nome = "Teste";

console.log(pessoa1);
```

#### Classes Construtoras
```js
class Veiculo {
  constructor(tipo, cor, velocidade) {
    this.tipo = tipo;
    this.cor = cor;
    this.velocidade = velocidade;
  }
  mostrarInfo() {
    return `Tipo: ${this.tipo}, Cor: ${this.cor}, Velocidade: ${this.velocidade} km/h`;
  }

}
```

### Extras

#### Math
> **Reveja o Math pelo W3Schools**
> [W3SchoolsMath](https://www.w3schools.com/js/js_math.asp)

#### Datas
> **Reveja o Datas pelo W3Schools**
> [W3SchoolsDates](https://www.w3schools.com/js/js_dates.asp)


#### Operacao-ternaria

```js
const n1 = 2;
const n2 = 3;

// const verificador = n1 > n2 ? "MAIOR" : "MENOR OU IGUAL"
// if(n1 > n2) {
//   console.log("MAIOR");
// } else {
//   console.log("MENOR OU IGUAL");
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
```
#### Desconstrutor

```js
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
```

#### Filas

```js
// F.I.F.O - First In First Out
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

```

#### Pilhas

```js
// L.I.F.O - Last In First Out
/*

  Pilhas (Stack):

  

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

*/

  

class Pilha {

  constructor() {

    this.itens = [];

  }

  

  push(elemento) {

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

  

  isEmpty() {

    return this.itens.length === 0;

  }

  

  tamanho() {

    return this.itens.length;

  }

}

  

const pilha = new Pilha();

  

pilha.push("A");

pilha.push("B");

pilha.push("C");

  

console.log(pilha.peek());

console.log(pilha.pop());

console.log(pilha.peek());

console.log(pilha.pop());

console.log(pilha.peek());

console.log(pilha.pop());

console.log(pilha.peek());

console.log(pilha.tamanho());

console.log(pilha.isEmpty());

```

#### Spread-rest

```js
const numeros = [1, 2, 3, 4, 5];

const pessoas = [

  { nome: 'Ana Silva', idade: 28, email: 'ana.silva@example.com', cidade: 'São Paulo' },

  { nome: 'Bruno Costa', idade: 35, email: 'bruno.costa@example.com', cidade: 'Rio de Janeiro' },

  { nome: 'Carla Souza', idade: 22, email: 'carla.souza@example.com', cidade: 'Belo Horizonte' },

  { nome: 'Daniel Pereira', idade: 41, email: 'daniel.pereira@example.com', cidade: 'Curitiba' },

  { nome: 'Eva Lima', idade: 30, email: 'eva.lima@example.com', cidade: 'Porto Alegre' },

];

  

const [

  { nome: nome1, idade: idade1, email: email1, cidade: cidade1 },

  { nome: nome2, idade: idade2, email: email2, cidade: cidade2 },

  { nome: nome3, idade: idade3, email: email3, cidade: cidade3 },

  { nome: nome4, idade: idade4, email: email4, cidade: cidade4 },

  { nome: nome5, idade: idade5, email: email5, cidade: cidade5 },

] = pessoas;

  
  

// Operador 'rest' em arrays: pega o primeiro elemento e coloca em 'a1',

// e coloca o resto dos elementos (o que sobrou) em um novo array 'a2'.

// No exemplo: a1 = 1, a2 = [2, 3, 4, 5]

const [a1, ...a2] = numeros;

  

// Operador 'spread' em arrays: cria um novo array copiando todos os

// elementos de 'numeros' e adiciona mais valores no final.

// Aqui criamos 'numeros2' que começa com os mesmos itens de 'numeros'

// e depois tem os números 6, 7, 8, 9, 10.

const numeros2 = [...numeros, 6, 7, 8, 9, 10];

  

console.log(a1);

console.log(a2);

console.log(numeros2)
```