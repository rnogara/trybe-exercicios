let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// var numbersCrescent = numbers.sort((a, b) => a - b);
// console.log(numbersCrescent);

// var numbersDecrescent = numbers.sort((a, b) => b - a);
// console.log(numbersDecrescent);

var numbersMultiply = [];
for (let i = 0; i < numbers.length; i += 1){
  if ( i + 1 < numbers.length){
    numbersMultiply.push(numbers[i] * numbers[i+1]);
  } else if (i === (numbers.length - 1)){
    numbersMultiply.push(numbers[i] * 2);
  }
}
console.log(numbersMultiply);
