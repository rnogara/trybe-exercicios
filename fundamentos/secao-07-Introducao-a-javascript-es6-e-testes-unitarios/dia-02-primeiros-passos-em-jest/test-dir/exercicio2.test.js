const {myFizzBuzz} = require('./exercicio2.js');

//Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado. ~15
test('fizzBuzz recebe 15 e retorna fizzbuzz', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
});

// Execute a função myFizzBuzz(num), sendo num um número divisível por 3, e verifique se o retorno é o esperado. ~9
test('fizzBuzz recebe 9 e retorna fizz', () => {
  expect(myFizzBuzz(9)).toBe('fizz');
});

// Execute a função myFizzBuzz(num), sendo num um número divisível por 5, e verifique se o retorno é o esperado. ~40
test('fizzBuzz recebe 40 e retorna buzz', () => {
  expect(myFizzBuzz(40)).toBe('buzz');
});

// Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado. - ~7
test('fizzBuzz recebe 7 e retorna 7', () => {
  expect(myFizzBuzz(7)).toBe(7);
});

// Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado. ~ameno
test("fizzBuzz recebe 'ameno' e retorna false", () => {
  expect(myFizzBuzz('ameno')).toBe(false);
});