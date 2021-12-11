let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');
let length = parseInt(input[0].split(" ")[0]);
let money = parseInt(input[0].split(" ")[1]);

input.map(Number)
let count = 0;
for (let i = length; i > 0; i--) {
    let check = input[i];
    let doit;
    if (money >= check) {
        doit = parseInt(money / check);
        money -= check * doit
        count += doit;
    }
    if (money <= 0) {
        break;
    }
}
console.log(count);