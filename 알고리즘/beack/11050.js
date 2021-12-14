let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split(" ").map(Number);
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
let min
let max

if(+input[0]> +input[1]){
    max = +input[0]
    min = +input[1]
}else{
    max = +input[1]
    min = +input[0]
}

console.log(factfun(min,max));

