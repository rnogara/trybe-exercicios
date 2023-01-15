const { encode, decode } = require('./exercicio3');

describe('testar as funções encode e decode', () => {
  it('testa se encode e decode são funções', () => {
    expect(encode).toBeInstanceOf(Function);
    expect(decode).toBeInstanceOf(Function);
  });
  it('encode(aeiou) retorna 12345', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  it('decode(12345) retorna aeiou', () => {
    expect(decode('12345')).toBe('aeiou');
  });
// Teste se as demais letras/números não são convertidos para cada caso;
  it('espera que as outras letras não sejam convertidas', () => {
    expect(encode('Frase teste')).toBe('Fr1s2 t2st2');
    expect(decode('Fr1s2 t2st2')).toBe('Frase teste');
  });
// Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.
  it('testa se encode e decode são funções', () => {
    expect(encode('trybe')).toHaveLength(5);
    expect(decode('tryb2')).toHaveLength(5);
  });
});
