let fs = require('fs');
let input = fs.readFileSync('test.text').toString().split(" ").map(Number)
let a = input[0]
let n = input[1]

let erased = [];
for (let i=2; i<=n; ++i) {
    if (!erased[i]) {
        if(i>=a)
        console.log(i)
        for (let j=i*2; j<=n; j+=i)
            erased[j] = true;
    }
}