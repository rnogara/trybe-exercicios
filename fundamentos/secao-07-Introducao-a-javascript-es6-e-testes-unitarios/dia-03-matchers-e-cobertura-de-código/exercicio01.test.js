const sum = require('./exercicio01.js');

// Teste se o retorno de sum(4, 5) é 9;
it('Teste se o retorno de sum(4, 5) é 9', () => {
  expect(sum(4, 5)).toBe(9);
});
// Teste se o retorno de sum(0, 0) é 0.
it('Teste se o retorno de sum(0, 0) é 0', () => {
  expect(sum(0, 0)).toBe(0);
});
// Teste se a função sum lança um erro quando os parâmetros são number 4 e string '5';
it("Teste se o retorno de sum(4, '5') é um erro", () => {
  expect(() => sum(4, '5')).toThrow();
});
// Teste se a mensagem de erro é 'parameters must be numbers' quando realizar a chamada sum(4, '5');
it("Teste se o retorno de sum(4, '5') é 'parameters must be numbers' ", () => {
  expect(() => sum(4, '5')).toThrow('parameters must be numbers');
});