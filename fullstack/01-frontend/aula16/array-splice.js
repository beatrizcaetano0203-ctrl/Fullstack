const numeros = [10, 20, 30, 40, 50];

// numeros.splice(2, 0, 35, 37, 100); // A partir do índice 2, remove 0 elementos e adiciona 35, 37 e 100


//splice(posicao, remocao, adicao)
numeros.splice(3, 0, 350);

console.log(numeros);