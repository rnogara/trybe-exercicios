// A - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
const fs = require('fs').promises;

async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
  strings.forEach((string) => console.log(string));
}

// B - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo “id não encontrado”.
async function getSimpsonById(id) {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');
  
  const simpsons = JSON.parse(fileContent);
  const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

     if (!chosenSimpson) {
       throw new Error('id não encontrado');
     }
  return chosenSimpson;
}

// C - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
async function filterSimpsons() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
  console.log('C done!');
}

// D - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
async function createSimpsonsFamily() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const familyIds = [1, 2, 3, 4];
  const simpsonsFamily = simpsons
    .filter((simpson) => familyIds.includes(Number(simpson.id)));

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
  console.log('D done!');
}

// E - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
async function addNelsonToFamily() {
  const fileContent = await fs
    .readFile('./simpsonsFamily.json', 'utf-8');

  const simpsonsFamily = JSON.parse(fileContent);
  simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
  console.log('E done!');
}

// F - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');

  const simpsonsWithMaggie = simpsonsWithoutNelson
    .concat([{ id: '15', name: 'Maggie Simpson' }]);

  console.log('F done!');
  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
}


async function main() {
  // A
  console.log('A');
  await readAll();
  console.log(' ');
  //B
  console.log('B');
  const simpson = await getSimpsonById(1);
  console.log(simpson);
  console.log(' ');
  //C
  console.log('C');
  await filterSimpsons();
  console.log(' ');
  //D
  console.log('D');
  await createSimpsonsFamily();
  console.log(' ');
  //E
  console.log('E');
  await addNelsonToFamily();
  console.log(' ');
  //F
  console.log('F');
  await replaceNelson();
  console.log(' ');
}

main();