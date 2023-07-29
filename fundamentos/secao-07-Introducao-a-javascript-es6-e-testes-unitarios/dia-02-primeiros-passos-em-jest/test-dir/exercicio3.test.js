const {encode, decode} = require('./exercicio3.js');

// Teste se encode e decode são funções;
test('encode e decode são funções?', () => {
  expect(typeof encode && typeof decode).toBe('function');
});

// Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
test('encode aeiou são convertidas em 12345 respectivamente?', () => {
  expect(encode('aeiou')).toBe('12345');
});

// Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
test('decode 12345 são convertidas em aeiou respectivamente?', () => {
  expect(decode('12345')).toBe('aeiou');
});

// Teste se as demais letras/números não são convertidos para cada caso;
test('demais letras/numeros não são converitdos', () => {
  expect(encode('789dfgh')).toBe('789dfgh');
});

// Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.
test('quantidade de caracteres = a mesma', () => {
  expect(encode('abcdefjh').length).toBe(8);
  expect(decode('abcdefjh').length).toBe(8);
});
