let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split("\n")
let inlog = [];
const factorial = (num) => {
    if (num === 1 || num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
};

function factfun(n1, n2) {
    let a = factorial(n2) / (factorial(n1) * factorial(n2 - n1))
    return a
}
let len = +input[0]
for(let i = 1; i <= len ; i++){
    let [a , b] = input[i].split(" ").map(Number);
    inlog.push(parseInt(factfun(+a, +b)+0.5));
}
console.log(inlog.join('\n'))

