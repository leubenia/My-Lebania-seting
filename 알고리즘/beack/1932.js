let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split("\n");
let o = 0;
const temparr = new Array();
for(let i = 1 ; i <= input[0]; i++){ 
    temparr[o] = input[i].split(" ").map(Number)
    o++;
}
for(let j = 1 ; j < input[0];j++){
    // console.log(temparr[j].length)
    let tm = 0 ;
    let len = temparr[j].length;
    for(let k = 0; k < len ; k++){
        if(k == 0){
            temparr[j][k] = +temparr[j-1][k] + +temparr[j][k];
        }else if(k == temparr[j].length-1){
            temparr[j][k] = +temparr[j-1][k-1] + +temparr[j][k] 
        }else{
            let a1 = +temparr[j-1][k] + +temparr[j][k];
            let a2 = +temparr[j-1][k-1] + +temparr[j][k];
            temparr[j][k] = a1 > a2? a1: a2;
        }
    }
}
const ismax = temparr[+input[0]-1]
console.log(Math.max(...ismax))
