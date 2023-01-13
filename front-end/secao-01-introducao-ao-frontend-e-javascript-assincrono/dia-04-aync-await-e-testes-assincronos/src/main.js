import '../styles.css';
import Swal from 'sweetalert2';

const searchBtn = document.querySelector('#search-btn');
const resultWrapper = document.querySelector('#result-wrapper');
const cepSize = 8;
let cepNoHifen = '';

searchBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  while (resultWrapper.hasChildNodes()) {
    resultWrapper.removeChild(resultWrapper.lastChild);
  }
  try {
    let searchedCep = document.querySelector('#inputCep').value;
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
  } catch (error) {
    Swal.fire(error.message);
  }
  if (document.querySelector('p').innerHTML === '<strong>erro</strong>: true') {
    while (resultWrapper.hasChildNodes()) {
      resultWrapper.removeChild(resultWrapper.lastChild);
    }
    return Swal.fire({
      icon: 'error',
      text: 'Cep inválido!',
    });
  }
});
