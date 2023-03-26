const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparator = (arrRight, arrAnswer) => {
  let points = 0;
  arrRight.forEach( (a, i) => {
    if (a === arrAnswer[i]){
      points += 1;
    }
    if (a !== arrAnswer[i] && a !== 'N.A') {
      points += -0.5;
    }
  });
  return points;
};

const examChecker = (arrRight, arrAnswer, callback) => {
  const result = callback(arrRight, arrAnswer);
  return `Resultado final: ${result} pontos`;
};

console.log(examChecker(RIGHT_ANSWERS, STUDENT_ANSWERS, comparator));