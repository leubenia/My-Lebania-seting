let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

input.shift();
let data = input[0].split(" ");
data.sort(function(a, b) { return a - b;})
console.log(+data[0]*+data[data.length-1]);