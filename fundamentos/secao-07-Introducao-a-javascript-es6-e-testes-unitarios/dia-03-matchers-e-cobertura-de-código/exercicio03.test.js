const { info, printMessage } = require('./exercicio02');

// Verifique se a resposta contém a informação Boas vindas,, antes de chamar o nome da personagem;
it("resposta de printMessage contém 'Boas vindas, ' antes do personagem", () => {
  expect(printMessage(info)).toContain(`Boas vindas, ${info.personagem}`);
});
// Verifique se a resposta contém o nome correto da personagem.
it("resposta do printMessage contém o nome correto da personagem", () => {
  expect(printMessage(info)).toContain(info.personagem);
});