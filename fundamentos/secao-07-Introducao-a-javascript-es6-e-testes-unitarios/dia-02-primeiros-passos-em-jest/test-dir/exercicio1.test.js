const {myRemove} = require('./exercicio1.js');

//Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado;
test('array [1, 2, 3, 4] retorna sem o 3', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});

//Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];
test('array [1, 2, 3, 4] não retorna inteiro', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
});

//Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.
test('array[1, 2, 3, 4], 5 retorna [1, 2, 3, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
});