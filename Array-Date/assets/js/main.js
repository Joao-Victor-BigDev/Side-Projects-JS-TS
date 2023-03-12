const h1 = document.querySelector('.container h1');
const data = new Date();
function getDayWeekText(diaSemana) {
  const diaSemanaTexto = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira',
    'sexta-feira', 'sabado'];
  return diaSemanaTexto[diaSemana];
}

function getNameMouth(numeroMes) {
  const nomeMes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'dezembro']
  return nomeMes[numeroMes]
}

function zeroAEsquerda(num) {
  return num >= 10 ? num :`0${num}`
}

function createDate(data) {
  const dayWeek = data.getDay();
  const numberMouth = data.getMonth();

  const nameDay = getDayWeekText(dayWeek);
  const nameMouth = getNameMouth(numberMouth);
  return (
    `${nameDay}, ${data.getDate()} de ${nameMouth}` +
    ` de ${data.getFullYear()} - ${zeroAEsquerda(data.getHours())}` +
    `:${zeroAEsquerda(data.getMinutes())}` +
    `:${zeroAEsquerda(data.getSeconds())}`
  );
}
h1.innerHTML = createDate(data);