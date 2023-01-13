import '../styles.css';
import Swal from 'sweetalert2';

const searchedCep = document.querySelector('#inputCep').value;
const searchBtn = document.querySelector('#search-btn');
const result = document.querySelector('#result');

searchBtn.addEventListener('click', async () => {
  try {
    const CEP_API = `https://viacep.com.br/ws/${searchedCep}/json/`;
    const response = await fetch(CEP_API);
    const data = await response.json();
    const keys = Object.keys(data);
    keys.forEach((element) => {
      if (data[element] !== '') {
        result.innerHTML += `${element}: ${data[element]}`;
      }
    });
  } catch (error) {
    Swal.fire(error.message);
  }
});
