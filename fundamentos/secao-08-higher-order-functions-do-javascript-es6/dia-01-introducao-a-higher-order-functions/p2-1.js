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

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947

const birthYearFind = books.find((e) => e.author.birthYear === 1947).author.name;

console.log(birthYearFind);

// Retorne o nome do livro com menor número de caracteres (menor nome)

const leastCharactersBook = () => {
  let smallest = 'thereShouldBeABookNameSmallerThanThis';
  books.forEach((e) => {
    if (e.name.length < smallest.length) {
      smallest = e.name;
    }
  });
  return smallest;
};


console.log('');
console.log(leastCharactersBook());

// Encontre o primeiro livro cujo nome possua 26 caracteres

const bookWith26Characters = books.find(e => e.name.length === 26);

console.log('');
console.log(bookWith26Characters);

// Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário

const bornInSecXX = books.every( e => e.author.birthYear >= 1901 && e.author.birthYear <= 2000);

console.log('');
console.log(bornInSecXX);

// Faça uma função que retorne true, se algum livro tiver sido lançado na década de 80, e false, caso contrário

const didABookGotRealesedOn80s = books.some( e => e.releaseYear >= 1980 && e.releaseYear <= 1989);

console.log('');
console.log(didABookGotRealesedOn80s);

// Faça uma função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário

const bornSameYear = () => {
  let validator = true;
  books.forEach((b) => {
    books.forEach((e) => {
      if (e.author.birthYear === b.author.birthYear && e.author.name !== b.author.name) {
        validator = false;
      }
    });
  })
  return validator;
};

console.log('');
console.log(bornSameYear());
