//Calculadora
const a = 3;
const b = 7;

const adicao = a + b;
const subtracao = a - b;
const multiplicacao = a * b;
const divisao = a / b;
const modulo = a % b;

//Comparando o maior de dois números
 const c = 5;
 const d = 20;

 if (c > d){
    console.log( c + ' é o maior número');
 } else if (d > c){
    console.log( d + ' é o maior número');
 } else if ( c === d ){
    console.log('os dois números são iguais');
 } else {
    console.log('ops... algo deu errado');
 }

 //Comparando o maior de três números
 const e = 4;
 const f = 12;
 const g = 3;

 if (e > f && e > g){
    console.log( e + ' é o maior número');
 } else if (f > e && f > g){
    console.log( f + ' é o maior número');
 } else if (g > e && g > f){
    console.log( g + ' é o maior número');
 } else if (e === f && f === g){
    console.log('os três números são iguais');
 } else {
    console.log('ops... walgo deu errado');
 }

 //Positivo ou Negativo?
 const h = 4;

 if (h > 0){
    console.log('Esse número é positivo');
 } else if (h < 0){
    console.log('Esse número é negativo');
 } else if (h === 0){
    console.log('Esse número é zero');
 } else {
    console.log('ops... algo deu errado');
 }
 
 //Será que forma um triangulo?
 const i = 30;
 const j = 45;
 const k = 105;

 const somaAngulos = i + j + k;

 if(somaAngulos === 180){
    console.log(true);
 } else if (somaAngulos !== 180){
    console.log(false);
 } else {
    console.log('ops... algo deu errado');
 }

 //Como essa peça de xadrez se movimenta?
 const l = '';

 switch(l){
    case 'peão':
    case 'Peão':
        console.log('uma casa a frente');
        break;
    case 'torre':
    case 'Torre':
        console.log('qualquer quantidade de casas a frente, atrás ou dos lados');
        break;
    case 'cavalo':
    case 'Cavalo':
        console.log('duas casas a frente ou atrás posteriormente mais uma casa a direita ou a esquerda');
        break;
    case 'bispo':
    case 'Bispo':
        console.log('qualquer quantidade de casas nas diagonais');
        break;
    case 'rainha':
    case 'Rainha':
        console.log('qualquer quantidade de casas a frente, atrás, dos lados ou nas diagonais');
        break;
    case 'rei':
    case 'Rei':
        console.log('uma casa a frente, atrás, dos lados ou nas diagonais');
        break;
    default:
        console.log('Esta não é uma peça válida');
 }

 //COnversor de notas
 const m = 80;

 if (m <=100 && m >=90){
    console.log('Nota A');
 } else if (m < 90 && m >= 80){
    console.log('Nota B');
 } else if (m < 80 && m >= 70){
    console.log('Nota C');
 } else if (m < 70 && m >= 60){
    console.log('Nota D');
 } else if (m < 60 && m >= 50){
    console.log('Nota E');
 } else if (m < 50){
    console.log ('Nota F');
 } else {
    console.log('Nota inválida, por favor coloque um número de 0 a 100');
 }

 //Há um par entre nós
const n = 3;
const o = 4;
const p = 7;

if (n % 2 === 0 || o % 2 === 0 || p % 2 === 0){
    console.log(true);
} else {
    console.log(false);
}