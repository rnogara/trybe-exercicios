const { info } = require('./exercicio02');

// Considerando a função printMessage, crie um teste em Jest para garantir que o objeto passado como parâmetro possui a propriedade personagem.
it('objeto passado para a função printMessage precisa ter propriedade de personagem,', () => {
  expect(info).toHaveProperty('personagem');
});