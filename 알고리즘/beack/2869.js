let fs = require('fs');
let input = fs.readFileSync('test.text').toString().split(" ").map(Number)


console.log(Math.ceil(((input[2]-input[0])/(input[0]-input[1])))+1)