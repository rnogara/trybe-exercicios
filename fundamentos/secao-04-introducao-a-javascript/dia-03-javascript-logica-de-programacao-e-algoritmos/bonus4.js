const n = 5;
const draw = '*';
var line = '';
const middle = (n + 1)/ 2;
var left = middle;
var right = middle;

for (let a = 0; a <= middle; a += 1) {
  for (let l = 1; l <= n; l += 1){
    if (l > left && l < right) {
      line += '*';
    } else {
      line += ' ';
    }
  }
  console.log(line);
  line = '';
  right += 1;
  left -= 1;
}
