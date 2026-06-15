class Veiculo {
  constructor(tipo, cor, velocidade) {
    this.tipo = tipo;
    this.cor = cor;
    this.velocidade = velocidade;
  }

  mostrarIfo() {
    return `Tipo: ${this.tipo}, Cor: ${this.cor}, Velocidade: ${this.velocidade} km/h`;
  }
}

class Carro extends Veiculo {
  constructor(cor, modelo, velocidade) {
    super("carro", cor, velocidade);
    this._modelo = modelo;
  }

  get modelo() {
    return this._modelo;
  }

  set modelo(novoModelo) {
    this._modelo = novoModelo;
  }

  mostrarIfo() {
    return `Este é um ${this.modelo}, de cor ${this.cor}, e sua velocidade máxima é de ${this.velocidade} km/h.`;
  }

  acelerar(velocidadeAdicional = 10) {
    this.velocidade += velocidadeAdicional;
    return `O ${this.modelo} acelerou. Nova velocidade: ${this.velocidade} km/h.`;
  }
}

const barco = new Veiculo("Barco", "Branca", 80);

console.log(barco.mostrarIfo());

const porsche = new Carro("Vermelho", "911 Turbo", 320);
porsche.modelo = "Cayenne";
console.log("Modelo do Carro:", porsche.modelo);
console.log(porsche.mostrarIfo());
console.log(porsche.acelerar());
console.log(porsche.acelerar(30));
console.log(porsche.acelerar(50));
