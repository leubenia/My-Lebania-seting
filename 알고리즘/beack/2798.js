let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n')

let data = input[0].split(" ")[1];
input.shift();
input = input[0].split(" ")
let sum = 0;
for(let i = 0 ; i < input.length-2 ; i++){
    for(let j = i+1 ; j < input.length-1; j++){
        for(let n = j+1 ; n < input.length; n++){
            let check = +input[i] + +input[j] + +input[n];
            if(data >= check && sum <= check){
                sum = check;
            }
        }
    }
}

console.log(sum);
