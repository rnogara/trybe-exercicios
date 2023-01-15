import Swal from 'sweetalert2';
import '../styles.css';

const searchBtn = document.querySelector('#search-btn');
const resultWrapper = document.querySelector('#result-wrapper');
const cepSize = 8;
let cepNoHifen = '';

async function btnHandler() {
  let searchedCep = document.querySelector('#inputCep').value;
  if (searchedCep === '') {
    throw new Error('Você precisa passar um CEP');
  }
  if (searchedCep.includes('-')) {
    cepNoHifen = searchedCep.replace('-', '');
    searchedCep = cepNoHifen;
  }
  if (searchedCep.length !== cepSize) {
    return Swal.fire({
      icon: 'error',
      text: 'Cep inválido!',
    });
  }
  const CEP_API = `https://viacep.com.br/ws/${searchedCep}/json/`;
  const response = await fetch(CEP_API);
  const data = await response.json();
  const keys = Object.keys(data);
  keys.forEach((element) => {
    if (data[element] !== '') {
      const result = document.createElement('p');
      resultWrapper.appendChild(result);
      result.innerHTML = `<strong>${element}</strong>: ${data[element]}`;
    }
  });
  if (document.querySelector('p').innerHTML === '<strong>erro</strong>: true') {
    while (resultWrapper.hasChildNodes()) {
      resultWrapper.removeChild(resultWrapper.lastChild);
    }
    Swal.fire({
      icon: 'error',
      text: 'Cep inválido!',
    });
  }
}

searchBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  while (resultWrapper.hasChildNodes()) {
    resultWrapper.removeChild(resultWrapper.lastChild);
  }
  try {
    btnHandler();
  } catch (error) {
    Swal.fire(error.message);
  }
});

export default btnHandler;
