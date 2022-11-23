const { printMessage } = require('./exercicio04');

// Crie uma função de teste para validar se a mensagem de erro é lançada caso a função seja chamada com um objeto inválido.
it('Se não pasar parâmetro de objeto na função printMessage, deve retornar um erro', () => {
  expect(() => printMessage(1)).toThrow('objeto inválido');
});