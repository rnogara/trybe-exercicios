let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var soma = 0;

for (let i = 0; i < numbers.length; i += 1){
  console.log(numbers[i]);

  soma += numbers[i];
}

console.log(soma);