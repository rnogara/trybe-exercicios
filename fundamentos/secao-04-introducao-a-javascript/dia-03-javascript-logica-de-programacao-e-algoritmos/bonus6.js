// Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele por quaisquer outros números dá resto diferente de zero.

// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido. Além disso, vai precisar fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

function primo (number) {
  let primo = true;
  for (let n = 2; n < number; n += 1) {
    if (number % n === 0) {
      primo = false;
    }
  }
  return primo;
}

console.log(primo(4));
console.log('');
console.log(primo(5));
console.log('');
console.log(primo(7));
