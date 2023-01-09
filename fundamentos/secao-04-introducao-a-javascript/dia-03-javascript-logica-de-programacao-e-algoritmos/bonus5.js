const n = 7;
const draw = '*';
var line = '';
const middle = (n + 1)/ 2;
var left = middle;
var right = middle;

for (let a = 1; a <= middle; a += 1) {
  if (a === middle) {
    for (let lastLine = 1; lastLine <= n; lastLine += 1) {
      line += draw;
    }
  } else {
    for (let l = 1; l <= n; l += 1) {
      if (l === left || l === right) {
        line += '*';
      } else {
        line += ' ';
      }
    }
  }
  right += 1;
  left -= 1;
  console.log(line);
  line = '';
}
