let fs = require('fs');
let input = fs.readFileSync('test.text').toString().trim().split(' ').map(BigInt);
const a = input[0]
const b = input[1]
let sum = a/b+"\n"+a%b;
console.log(sum)