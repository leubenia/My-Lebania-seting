let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split("\n");

const len = +input[0]
const list = input[1].split(" ").map(Number);

let max = 0;
let templist = [];
for(let i = 1; i <= len ; i++){
    let min = 0;
    for(let j = 1 ; j < i; j++){
        if(+list[i-1]> +list[j-1]){
            if(min < templist[j]){
                min = templist[j];
            }
        }
    }
    templist[i] = min + 1;
    if(max < templist[i]){
        max = templist[i];
    }
}

console.log(max);

