const myRemove = require('./exercicio1');

describe('testa a função myRemove', () => {
  it('verifica se myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
 it('verifica se myRemove([1, 2, 3, 4], 3) não retorna [1, 2, 3, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
 });
 it('verfica se myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
 });
});