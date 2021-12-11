let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString()
let num = +input;
let res = 0;
for(let i = 1; i < +num ;i++){
    let check = i.toString();
    let temp = i;
    for(let j = 0 ; j < check.length ; j++){
        temp += +check[j];
    }
    if(num == temp){
        res = i;
        break;
    }
}
console.log(res)