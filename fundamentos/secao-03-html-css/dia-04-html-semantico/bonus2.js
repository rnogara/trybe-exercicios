// Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.

// Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado ao final pela função.

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers (arr) {
  const evenInArray = [];
  const flatenedArray = arr.flat();
  for (let i in flatenedArray) {
    if (flatenedArray[i] % 2 === 0) {
      evenInArray.push(flatenedArray[i]);
    }
  }
  return evenInArray;
}

console.log(arrayOfNumbers(vector));