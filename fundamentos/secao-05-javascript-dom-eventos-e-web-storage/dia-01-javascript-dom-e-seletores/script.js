/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
4. Crie e execute uma função que corrija o texto da tag <h1>.
5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
*/

function changePText() {
  let paragraph = document.getElementsByTagName('p')[1];
  paragraph.innerHTML = "Daqui a 2 anos me vejo trabalhando par aguma empresa de fora e ganahndo em dolares. Comprando minha primeira casa ou apê.";
}
changePText();

function changeToTrybe() {
  let square = document.getElementsByClassName('main-content')[0];
  square.style.background = 'rgb(76,164,10'; 
}
changeToTrybe();

const changeRedToWhite = () => {
  let squareRed = document.getElementsByClassName('center-content')[0];
  squareRed.style.background = "white";
}
changeRedToWhite();

function rightTitle() {
  let title = document.getElementsByTagName('h1')[0];
  title.innerHTML = "Exercício 5.1 - JavaScript";
}
rightTitle();

function pUpperCase() {
  let paragraph = document.getElementsByTagName('p')[0];
  paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
}
pUpperCase();

function showPs() {
  let paragraphs = document.getElementsByTagName('p');
  for (let i in paragraphs) {
    console.log(paragraphs[i].innerHTML);
  }
}
showPs();