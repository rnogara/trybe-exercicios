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
    console.log( c + 'é o maior número');
 } else if (d > c){
    console.log( d + 'é o maior número');
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
    console.log( e + 'é o maior número');
 } else if (f > e && f > g){
    console.log( f + 'é o maior número');
 } else if (g > e && g > f){
    console.log( g + 'é o maior número');
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