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
 const l = 'cavalo';

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

//Há um ímpar entre nós
if (n % 2 !== 0 || o % 2 !== 0 || p % 2 !== 0){
    console.log(true);
} else {
    console.log(false);
}

//Lucra ou não lucra?
const q = 50.95;
const r = 67.50;

const custoMil = q * 1000;
const custoTotal = custoMil + (custoMil * 0.2);

const vendaMil = r * 1000;
const lucro = vendaMil - custoTotal;

if (q < 0 || r < 0 || typeof q !== "number" || typeof r !== "number"){
    console.log('Valor inválido, favor colocar um número acima de zero')
} else {
    console.log('R$' + lucro + ',00');
}

//Salário bruto x salário líquido
const s = 3500.70;

if (s <= 1556.94){
    var salarioBase = s - (s * 0.08);
} else if (s >= 1556.95 && s <= 2594.92){
    var salarioBase = s - (s * 0.09);
} else if (s >= 2594.93 && s <= 5189.82){
    var salarioBase = s - (s * 0.11);
} else if (s > 5189.82){
    var salarioBase = s - 570.88;
}

if (salarioBase <= 1903.98){
    var salarioLiquido = salarioBase;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
    var salarioLiquido = salarioBase - ((salarioBase * 0.075) - 142.8);
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
    var salarioLiquido = salarioBase - ((salarioBase * 0.15) - 354.8);
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){
    var salarioLiquido = salarioBase - ((salarioBase * 0.225) - 636.13);
} else if (salarioBase > 4664.68){
    var salarioLiquido = salarioBase - ((salarioBase * 0.275) - 869.36);
}

const resultado = salarioLiquido.toFixed(2);
console.log('Seu salário bruto é de R$' + s.toFixed(2) + ' e seu salário líquido é de R$' + resultado + '.' )