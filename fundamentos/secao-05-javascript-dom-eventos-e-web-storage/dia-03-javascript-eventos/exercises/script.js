const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const createDaysOfTheMonth = () => {
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const ul = document.getElementById('days');

  for (let i in decemberDaysList){
    const dayNum = decemberDaysList[i];
    const li = document.createElement('li');
    li.innerHTML = dayNum;
    li.classList.add('day');
    if (dayNum === 24 || dayNum === 25 || dayNum === 31) {
      li.classList.add('holiday');
    };
    if (dayNum === 4 || dayNum === 11 || dayNum === 18 || dayNum === 25) {
      li.classList.add('friday');
    };

    ul.appendChild(li);
  };
}

createDaysOfTheMonth();