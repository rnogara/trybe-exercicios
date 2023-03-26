const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// 🚀 1 - Filtre todos os objetos do gênero ficção científica ou fantasia
const fantasyAndFiction = books.filter(e => e.genre === 'Fantasia' || e.genre === 'Ficção Científica');
console.log('1', fantasyAndFiction);

// 🚀 2 - Filtre os livros com mais de 60 anos desde sua publicação e ordene a partir do livro mais velho para o mais novo
// https://stackoverflow.com/questions/6002254/get-the-current-year-in-javascript
const moreThan60Years = books.filter(e => (new Date().getFullYear() - e.releaseYear) > 60).sort((a, b) => a.releaseYear - b.releaseYear);
console.log('');
console.log('2', moreThan60Years);

// 3 - Faça uma função que retorne os nomes dos livros, dado o ano de nascimento das pessoas autoras
const birthToBook = (yearOfBirth) => {
  return books.filter(e => e.author.birthYear === yearOfBirth).map(e => e.name);
};
console.log('');
console.log('3', birthToBook(1920));

// 🚀 4 - Crie um array que possua apenas os nomes de todas as pessoas autoras de ficção científica ou fantasia e ordene por ordem alfabética
const authorsFantasyAndFiction = books.filter(e => e.genre === 'Fantasia' || e.genre === 'Ficção Científica').map(e => e.author.name).sort();
console.log('');
console.log('4', authorsFantasyAndFiction);

// 🚀 5 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação
const nameBooksOlderThan60 = books.filter(e => (new Date().getFullYear() - e.releaseYear) > 60).map(e => e.name);
console.log('');
console.log('5', nameBooksOlderThan60);

// 🚀 6 - Encontre o primeiro resultado cujo nome registrado começa com três iniciais e retorne o nome do livro
const authorWith3Dots = books.filter(e => e.author.name[1] === '.' && e.author.name[4] === '.' && e.author.name[7] === '.')[0].name;
console.log('');
console.log('6', authorWith3Dots);
