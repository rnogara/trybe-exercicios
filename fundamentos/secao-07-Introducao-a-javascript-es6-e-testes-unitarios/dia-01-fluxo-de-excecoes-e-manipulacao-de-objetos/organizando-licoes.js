const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const objEntry = (arr, key,value) => {
  arr[key] = value;
}
objEntry(lesson2, 'turno', 'noite');
console.log(lesson2);

console.log('');

const objKeys = (obj) => {
  const keys = Object.keys(obj);
  console.log(keys);
}
objKeys(lesson1);

console.log('');

const objSize = (obj) => {
  const keysCouter = Object.keys(obj);
  const size = keysCouter.length;
  console.log(size);
}
objSize(lesson1);

console.log('');

const objValues = (obj) => {
  const values = Object.values(obj);
  console.log(values);
}
objValues(lesson3);

console.log('');

const allLessons = {};
Object.assign(allLessons, {lesson1, lesson2, lesson3});
console.log(allLessons);

console.log('');

//Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto
const keyIndex = (obj, index) => {
  const objKeyIndex = Object.values(obj);
  const objKeyValue = objKeyIndex[index];
  console.log(`Output: ${objKeyValue}`);
}
keyIndex(lesson1, 0);

console.log('');

//Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles o objeto, o nome da chave e o valor da chave.
const verifyKey = (obj, key, value) => {
  let verifyFlag = false;
  const runObjectKey = Object.keys(obj);
  const runObjectValue = Object.values(obj);
  for (let i = 0; i < runObjectKey.length; i += 1) {
    if (runObjectKey[i] === key && runObjectValue[i] === value) {
      verifyFlag = true;
    } else {
      verifyFlag = false;
    }
  }
  return `Output: ${verifyFlag}`;
}
console.log(verifyKey(lesson3, 'turno', 'noite'));

console.log('');

//Utilizando o objeto (allLesson), crie uma função para contar quantos estudantes assistiram às aulas de Matemática;
function howManyStudents (obj) {
  const allLessonKey = Object.keys(obj);
  let studentsMath = 0;
  for (let l in allLessonKey) {
    if (obj[allLessonKey[l]].materia === 'Matemática') {
      studentsMath += obj[allLessonKey[l]].numeroEstudantes;
    }
  }
  return console.log(`Um total de ${studentsMath} alunos assistem matemática`);
}
howManyStudents(allLessons);

console.log('');

//Utilizando o objeto (allLesson), crie uma função que deva retornar um objeto que represente o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.
function teacherReport (obj, name) {
  const runLessons = Object.keys(obj);
  const subject = [];
  let students = 0;
  for (let l in runLessons) {
    if (runLessons[l].professor === name) {
      subject.push(runLessons[l].materia);
      students += runLessons[l].numeroEstudantes;
    }
  }
  return console.log(`O(A) professor(a) ${name} deu as aulas de ${subject} para um total de ${students} estudantes`);
}
teacherReport(allLessons, 'Maria Clara');