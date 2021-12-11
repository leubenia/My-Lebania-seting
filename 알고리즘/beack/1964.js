let fs = require('fs');
let input = fs.readFileSync('test.text').toString();

let b;
// function test(a,c) {
//     a++;
//     if(c==1){
//         return b;
//     }
//     if (a>=2) {
//         b = (b + (a*3+1))%45678; 
//     }
//     if(c==a){
//         return b;
//     }
//     return test(a,c)
// }
for(let i = 0 ; i <= input; i++){
    if(i==1){
        b = 5;
    }
    if(i >= 2){
        b = (b + (i*3+1))%45678;
    }
}

console.log(b)