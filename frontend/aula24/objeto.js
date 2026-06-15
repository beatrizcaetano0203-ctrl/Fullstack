const crianca = {
  id: 1,
  nome: "Manuela",
  idade: "8 meses",
  cor: "branca",
  turma: "Berçário I",

  importante: {
    sono: "A mãe dará a informação do 1° sono, após isso, dormir sempre 2h depois que acordar.",
    alergico: true,
    alergias: [
      {
        nome: "abacaxi",
        tipo: "alimentar",
      },
      {
        nome: "rinite",
        tipo: "respiratória",
      },
    ],
    fala: false,
    informacaoFala: [
      {
        balbuceio: "Sim, dentro do esperado",
        gritinhos: "Não, observar",
      },
    ],
    anda: false,
    senta: true,
    sentaComApoio: true,
    come: true,
    comidas: [
      {
        arroz: "sim",
        feijão: "apenas o caldo",
        proteinas: "molinhas e bem picadas",
        salada: "bem pouquinha e bem picada",
        legumes: "à vontade, amassados",
        frutas: "duas vezes ao dia, amassadas",
        leite: "apenas se não comer bem",
        água: "à vontade, oferecer sempre",
      },
    ],
  },

  buscar() {
    return `Informações do sono da ${this.nome}: ${this.importante.sono}`;
  },
}

console.log(crianca.buscar());
