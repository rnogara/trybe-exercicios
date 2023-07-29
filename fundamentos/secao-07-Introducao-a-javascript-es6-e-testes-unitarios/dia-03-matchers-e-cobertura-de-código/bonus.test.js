const searchEmployee = require('./bonus');

it("se o retorno de ('4456-4', 'lastName') na função searchEmployee é 'Zuckerberg'", () => {
  expect(searchEmployee('4456-4', 'lastName')).toBe('Zuckerberg');
});

it("se o retorno de ('3456-7', 'lastName') na função searchEmployee é 'ID não identificada'", () => {
  expect(() => searchEmployee('3456-7', 'lastName')).toThrow('ID não identificada');
});

it("se o retorno de ('4456-7', 'xurobous') na função searchEmployee é 'Informação indisponível'", () => {
  expect(() => searchEmployee('4456-7', 'xurobous')).toThrow('Informação indisponível');
});
