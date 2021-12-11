// 5
// 3 1 4 3 2
let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n')
let len = parseInt(input[0]);
input.shift();

let testdata = input[0].split(" ")
for(i=0;testdata.length-len ; i++)testdata.pop()
testdata.sort(function(a, b) { return a - b;
})
let sum = 0;
let steck = [];
testdata.forEach((data)=>{
    steck.push(parseInt(data)+sum);
    sum += parseInt(data);
})
let req = 0;
steck.forEach((data)=>{
    req+= data;
})
console.log(req)