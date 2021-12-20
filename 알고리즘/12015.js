const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
var N = input[0];
input.shift();
var A = input[0].split(" ");
var V = new Array();
// console.log(A);
V.push(0);
for(let i of A){
    if(V[V.length-1] < i){
        // console.log(i);
        V.push(i)
    }
    else{
        let left = 1;
        let right = V.length;

        while(left < right){
            // console.log(left, right)
            let mid = Math.round((right+left)/2)
            // console.log(V[mid],i)
            if(V[mid] < i){
                left = mid+1
            }else{
                right = mid -1
            }
            V[right] = i;
        }
    }
}

console.log(V.length-1);
