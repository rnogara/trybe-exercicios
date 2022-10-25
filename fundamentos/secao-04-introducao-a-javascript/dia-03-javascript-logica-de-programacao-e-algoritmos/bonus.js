// desenhos com for
var n = 5;
var draw = '*';
var line = '';


//Primeio
// for (let l = 0; l <= n; l += 1){
//   line += draw;
// }
// for (let a = 0; a <= n; a += 1){
//   console.log(line);
// }

// Segundo
// for (let l = 0; l <= n; l += 1){
//   console.log(line);
//   line += draw;
// }

//Terceiro
// var position = n;

// for (let l = 0; l <= n; l += 1){
//   for (let c = 0; c <= n; c += 1){
//     if (c < position){
//       line = line + ' ';
//     } else {
//       line = line + draw;
//     }
//   }
//   console.log(line);
//   line = ' ';
//   position -= 1;
// }

//Quarto
// var middle = (n +1) / 2;
// var left = middle;
// var right = middle;

// for (let l = 0; l <= middle; l += 1){
//   for (let c = 0; c <= n; c += 1){
//     if (c > left && c < right){
//       line = line + draw;
//     } else {
//       line = line + ' ';
//     }
//   }
//   console.log();
//   line = ' ';
//   right += 1;
//   left -= 1;
// }

//Quinto
// let n = 7;
// let middle = (n + 1) / 2;
// let controlLeft = middle;
// let controlRight = middle;
// let symbol = '*';
// for (let line = 1; line <= middle; line += 1) {
//   let outputLine = '';
//   for (let col = 1; col <= n; col += 1) {
//     if (col == controlLeft || col == controlRight || line == middle) {
//       outputLine += symbol;
//     } else {
//       outputLine += ' ';
//     }
//   }
//   controlLeft -= 1;
//   controlRight += 1;
//   console.log(outputLine);
// }