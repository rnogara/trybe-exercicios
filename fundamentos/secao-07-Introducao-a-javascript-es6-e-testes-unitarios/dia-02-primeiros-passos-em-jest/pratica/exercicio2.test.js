const myFizzBuzz = require('./exercicio2');

describe('testa a função myFizzBuzz', () => {
  it('A função myFizzBuzz(num) retorna fizzbuzz se o num for divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('A função myFizzBuzz(num) retorna fizz se o num for divisível por 3', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });
  it('A função myFizzBuzz(num) retorna buzz se o num for divisível por 5', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });
// Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado.
  it('A função myFizzBuzz(num) retorna num se o num não for divisível por 3 ou 5', () => {
    expect(myFizzBuzz(1)).toBe(1);
  });
// Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado.
  it('A função myFizzBuzz(num) retorna false se o num não for um numero', () => {
    expect(myFizzBuzz('2')).toBeFalsy();
  });
});
