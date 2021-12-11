let fs = require('fs');
let input = fs.readFileSync('test.text').toString().toString().trim().split('\n').map(Number);
let a =[]
for(i = 1 ; i <= input[0];i++){
    if(input[i]==0){
        a.pop();
    }
    else{
        a.push(input[i]);
    }
}
let sum =0;
for(n of a){
    sum += n;
}
console.log(sum)