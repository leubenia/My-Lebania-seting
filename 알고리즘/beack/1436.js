let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString()
input = +input;
let t = 665;

while (input > 0) {
  t++;
  if (t.toString().includes('666')) {
    input--;
  }
  
}
console.log(t);