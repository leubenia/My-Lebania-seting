let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split("\n").map(Number)
let cunt0 = new Array(41);
let cunt1 = new Array(41);
for(let i = 0; i <= 41 ;i++){
    if(i === 0){
        cunt0[i] = 1; 
        cunt1[i] = 0;
    }else if(i === 1){
        cunt0[i] = 0; 
        cunt1[i] = 1;
    }else{
        cunt0[i] = cunt0[i-1] + cunt0[i-2];
        cunt1[i] = cunt1[i-1] + cunt1[i-2];
    }
}
for(let j = 1; j <= +input[0] ; j++){
    console.log(cunt0[+input[j]], cunt1[+input[j]]);
}