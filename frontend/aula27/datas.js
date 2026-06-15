const agora = new Date().getMonth() + 1;
const hoje = new Date();
const mesPorExtenso = hoje.toLocaleString("pt-BR", { month: "long" });
const diaPorExtenso = hoje.toLocaleString("pt-BR", { weekday: "long" });

console.log(`Mês atual: ${agora}`);
console.log(`Mês por extenso: ${mesPorExtenso}`);
console.log(`Dia da semana: ${diaPorExtenso}`);
console.log(hoje.getDay() + 1);
console.log(hoje.getHours());
console.log(hoje.getMinutes());
console.log(hoje.getSeconds());
console.log(hoje.getFullYear());
console.log(hoje.getTime());

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  weekday: "long",
  day: "2-digit",
  month: "long",
  year: "numeric",
});

function formatTime(date) {
  const time = date.toLocaleTimeString("pt-BR", { hour12: false });
  const ms = String(date.getMilliseconds()).padStart(3, "0");
  return `${time}.${ms}`;
}

function renderDateTime() {
  const now = new Date();
  const fullDate = dateFormatter.format(now);

  console.clear();
  console.log(`Data: ${fullDate}`);       // ex.: terça-feira, 10 de dezembro de 2025
  console.log(`Hora: ${formatTime(now)}`); // ex.: 18:30:45.123
}

// Atualiza ~10 vezes por segundo para contar milissegundos visivelmente
setInterval(renderDateTime, 100);
renderDateTime();
// console.log(dateFormatter.format(hoje));
// console.log(formatTime(hoje));