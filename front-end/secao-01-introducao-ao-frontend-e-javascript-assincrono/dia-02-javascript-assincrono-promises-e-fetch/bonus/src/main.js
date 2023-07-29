import './styles.css';

const dogBtn = document.querySelector('#dog-btn');
const catBtn = document.querySelector('#cat-btn');
const luckyBtn = document.querySelector('#lucky-btn');
const petImg = document.querySelector('#pet-img');

dogBtn.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((resolve) => resolve.json())
    .then((data) => {
      const petURL = data.message;
      petImg.src = petURL;
    });
});

catBtn.addEventListener('click', () => {
  fetch('https://aws.random.cat/meow')
    .then((resolve) => resolve.json())
    .then((data) => {
      const petURL = data.file;
      petImg.src = petURL;
    });
});

luckyBtn.addEventListener('click', () => {
  Promise.any([
    fetch('https://aws.random.cat/meow'),
    fetch('https://dog.ceo/api/breeds/image/random'),
  ])
    .then((res) => res.json())
    .then((data) => {
      const petURL = data.file || data.message;
      petImg.src = petURL;
    });
});
