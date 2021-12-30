let fs = require('fs');///dev/stdin
let input = fs.readFileSync('dev/stdin').toString().split('\n')
const a = []
for (let i = 1; i <= parseInt(input[0].split(" ")[0]); i++) {
    a.push(i);
}

function left() {
    const lt = a.shift()
    a.push(lt);
}

function right() {
    const rt = a.pop();
    a.unshift(rt);
}

let c = 0;
g = input[1].split(" ").map(Number)
g.forEach((data) => {
    const length = a.length;
    const index = a.indexOf(data);
    if (index < length/2) {
        while (1) {
            if (a[0] == data) {
                a.shift()
                break;
            }
            else {
                left();
                c++
            }
        }
    }
    else {
        while (1) {
            if (a[0] == data) {
                a.shift()
                break;
            }
            else {
                right();
                c++
            }
        }
    }
});
console.log(c);