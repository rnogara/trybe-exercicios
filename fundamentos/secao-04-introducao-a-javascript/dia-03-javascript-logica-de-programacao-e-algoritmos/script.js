// Fatorial
var numeroFatorial = 10;
var fatorial = 0;
for (let i = (numeroFatorial - 1); i > 0; i -= 1){
  fatorial += (numeroFatorial * i); 
}
console.log('O fatorial de ' + numeroFatorial + ' é ' + fatorial);

//Inversor de palavra
var wordToReverse = 'tryber';
var wordInReverse = [];
for (let i = 1; i <= wordToReverse.length; i += 1){
  wordInReverse += wordToReverse[wordToReverse.length - i];
}
console.log('');
console.log('O reverso de ' + wordToReverse + ' é: ' + wordInReverse);

//Menor palavra do array
let array = ['java', 'javascript', 'python', 'html', 'css'];
var menorPalavra = '';
for (let i = 0; i < array.length; i += 1){
  for (let n = 1; n < array.length; n += 1){
    if (array[i].length < array[n].length){
      menorPalavra = array[i];
    }
  }
}
console.log('');
console.log('A menor palavra no array é: ' + menorPalavra);

//Numero primo
var maiorNumeroPrimo = 2;
for (let n = 2; n <= 50; n += 1){
  var primo = true;
  for (let d = 2; d < n; d += 1){
    if (n % d === 0 && n !== d){
      primo = false;
    }
  }
  if (primo === true && n > maiorNumeroPrimo){
    maiorNumeroPrimo = n;
  }
}

console.log('');
console.log('O maior numero primo entre 2 e 50 é: ' + maiorNumeroPrimo);