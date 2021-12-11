let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split(' ');
let a ;
let b ;
if(+input[0]> +input[1]){
    a = +input[0];
    b = +input[1];
}else{
    a = +input[1];
    b = +input[0];
}

function uc(a,b) {
    let num = a%b
    if(num == 0){
        return b;
    }
    return uc(b,num);
}
let min = uc(a,b);
let max = parseInt(a/min)*parseInt(b/min)*min;
console.log(min)
console.log(max)
