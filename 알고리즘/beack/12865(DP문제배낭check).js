let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split("\n");
const [len , max] = input[0].split(" ").map(Number);

const W = new Array(len +1); // 무게
const V = new Array(len +1); // 가치
const dp = new Array(max +1).fill(0);

for (let i = 1; i <= len; i++) {
    const [w ,v] = input[i].split(" ") 
    W[i] = +w
    V[i] = +v
}

for (let i = 1; i <= len; i++) {
    for (let j = max; j - W[i] >= 0; j--) {
        dp[j] = Math.max(dp[j], dp[j - W[i]] + V[i]);
    }
}
console.log(dp[max]);
