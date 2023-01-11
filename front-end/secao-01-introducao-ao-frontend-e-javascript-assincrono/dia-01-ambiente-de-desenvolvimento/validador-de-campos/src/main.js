import validator from 'validator';

const inputDeTexto = document.querySelector('#value');
const btn = document.querySelector('#btn');
const selector = document.querySelector('#option');
const answer = document.querySelector('#answer');

answer.setAttribute('alt', `${answer.innerHTML}`);
const UUID_VERSION = 4;

btn.addEventListener('click', (event) => {
  event.preventDefault();
  const inputs = {
    cpf: validator.isTaxID(inputDeTexto.value, 'pt-BR'),
    email: validator.isEmail(inputDeTexto.value),
    id: validator.isUUID(inputDeTexto.value, UUID_VERSION),
    url: validator.isURL(inputDeTexto.value),
    hexColor: validator.isHexColor(inputDeTexto.value),
  };
  answer.innerHTML = `A validação retornou ${inputs[selector.value]}`;
});
