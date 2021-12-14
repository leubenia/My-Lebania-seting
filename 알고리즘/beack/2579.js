let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

const n = parseInt(input.shift());
input = input.map(Number);
dp = Array(301);

dp[0] = input[0];
dp[1] = Math.max(input[0]+input[1], input[1]);
dp[2] = Math.max(input[1]+input[2], input[0]+ input[2]);

//두가지의 방법 중 더 큰 값을 택
for(let i =3; i<n; i++){
    dp[i] = Math.max(input[i] + dp[i-2], input[i]+input[i-1]+ dp[i-3]);
}

console.log(dp[n-1]);
