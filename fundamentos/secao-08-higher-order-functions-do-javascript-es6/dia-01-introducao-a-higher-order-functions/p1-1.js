// { nomeCompleto, email } 

const createMail = (fullName) => {
  const loweredName = fullName.toLowerCase();
  const separateName = loweredName.split(' ');
  const nameLength = [];
  separateName.forEach((name, i) => {
    if (i < separateName.length - 1) {
      nameLength.push(`${name}_`);
    }
    if (i === separateName.length -1) {
      nameLength.push(`${name}`);
    }
  });
  const emailName = nameLength.join('');
  const email = `${emailName}@trybe.com`
  return {fullName, email};
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva Junior'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(createMail));