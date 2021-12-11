let fs = require('fs');
let input = fs.readFileSync('test.text').toString();

let a = parseInt(input)
let c = 0;
while (a>0) {
    if(a == 0){
        c = 0;
    }
    if(a%5==0){
        c += a/5;
        break;
    }else if(a%5%3==0){
        c += parseInt(a/5);
        c += a%5/3;
        break;
    }
    a -= 3;
    c++
    if(a<2){
        c = 0;
        break
    }
}
if(c == 0){
    c = -1;
}
console.log(c)


