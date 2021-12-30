let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().toString().trim();
let b = input;
let a = input;
let c = 0;
while (true) {
    if(a<10){
        a*10;
    }
    let r = parseInt(a/10)+a%10;
    a = a%10*10+r%10;
    c++;
    if(a == b){
        break;
    }
}
console.log(c)