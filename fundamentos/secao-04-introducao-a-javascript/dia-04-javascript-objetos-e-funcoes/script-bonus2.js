let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector){
  let array = vector.flat();
  let evenNumbers = [];
  for (let i in array){
    if (array[i] % 2 === 0){
      evenNumbers.push(array[i]);
    }
  }
  return console.log(evenNumbers);
}

arrayOfNumbers(vector);