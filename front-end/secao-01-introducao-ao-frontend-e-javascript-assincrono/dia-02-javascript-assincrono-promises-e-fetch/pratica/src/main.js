import './styles.css';

const img = document.querySelector('#hero-img');
const name = document.querySelector('#hero-name');
const btn = document.querySelector('#randomBtn');

const BASE_URL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id';
const MAX_HEROES = 800;

const randomId = () => Math.floor(Math.random() * MAX_HEROES);

btn.addEventListener('click', (event) => {
  event.preventDefault();
  const id = randomId();
  fetch(`${BASE_URL}/${id}.json`)
    .then((result) => result.json())
    .then((data) => {
      img.src = data.images.lg;
      name.innerHTML = data.name;
    })
    .catch((error) => window.alert(error.message));
});
