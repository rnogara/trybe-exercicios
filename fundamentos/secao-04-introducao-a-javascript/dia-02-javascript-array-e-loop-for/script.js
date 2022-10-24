let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var soma = 0;
var maiorNumero = 0;
var quantidadeImpares = 0;
var mensagemSemImpar = '';
var menorNumero = Infinity;

console.log('Estes são os numeros dentro do array:');
for (let i = 0; i < numbers.length; i += 1){
  console.log(numbers[i]);

  soma += numbers[i];

  if (numbers[i] > maiorNumero) {
    maiorNumero = numbers[i];
  }

  if (numbers[i] % 2 !== 0){
    quantidadeImpares += 1;
  } else if (quantidadeImpares === 0){
    mensagemSemImpar = 'Nenhum valor ímpar encontrado';
  }

  if (numbers[i] < menorNumero) {
    menorNumero = numbers[i];
  }
}

console.log('');
console.log('Esta é a soma dos numeros dentro do array: ' + soma);

var media = soma / (numbers.length - 1);
console.log ('Esta é a média dos numeros dentro do array: ' + media.toFixed(0));

if (media > 20){
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

console.log('');
console.log('O maior numero dentro do array é: ' + maiorNumero);

console.log('');
console.log('Existem ' + quantidadeImpares + ' números ímpares dentro do array');
console.log(mensagemSemImpar);

console.log('O menor numero dentro do array é: ' + menorNumero);

let newNumbers = [];
for (let n = 1; n <= 25; n += 1){
  newNumbers.push(n);
}
console.log('');
console.log('Novo Array:')
console.log(newNumbers);

console.log('');
console.log('Divisão de cada numero do novo array por dois:')
var divisao = 0;
for (let index = 0; index < newNumbers.length; index += 1){
  divisao = newNumbers[index] /2;
  console.log(divisao);
}