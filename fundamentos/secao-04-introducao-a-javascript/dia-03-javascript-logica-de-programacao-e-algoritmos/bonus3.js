const n = 5;
const draw = '*';
var line = '';
var position = 1;

for (let a = 1; a <= n; a += 1) {
  for (let l = n; l >= 1; l -= 1) {
    if (position < l) {
      line += ' ';
    } else {
      line += draw;
    }
  }
  position += 1;
  console.log(line);
  line = '';
}
