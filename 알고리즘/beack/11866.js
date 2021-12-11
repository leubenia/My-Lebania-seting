let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split(' ').map(Number)
const a = []
length = input[0]
for (let i = 1; i <= length; i++) {
    a.push(i);
}

function left() {
    const lt = a.shift()
    a.push(lt);
}
log = [];
while (a.length !== 0) {
    for(let j = 0; j < input[1]-1 ; j++){
        left()
    }
    log.push(a.shift());
}
console.log("<"+log.join(", ")+">")