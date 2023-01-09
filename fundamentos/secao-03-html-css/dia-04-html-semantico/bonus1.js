// Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

const numerosRomanos = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToDecimal(string) {
  const romanArray = string.toUpperCase().split('');
  const romanLength = romanArray.length;
  let soma = numerosRomanos[romanArray[romanLength - 1]];
  let atual = numerosRomanos[romanArray[romanLength - 1]];

  for (let i = 2; i <= romanLength; i += 1) {
    const prox = numerosRomanos[romanArray[romanLength - i]];
    if (atual <= prox) {
      soma += prox;
    } else {
      soma -= prox;
    }
    atual = prox;
  }

  return soma;
}

console.log(romanToDecimal('IX')); //9
console.log('');
console.log(romanToDecimal('CLX')); //160
console.log('');
console.log(romanToDecimal('mmxxiii')); //2023
