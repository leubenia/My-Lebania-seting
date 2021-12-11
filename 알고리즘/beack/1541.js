let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString();
const a = [];
const pu = [];
const ma = [];
let sum = 0;
var temp = "";
let tempsum = 0;
let tempma = 0;

for(let i = 0 ; i < input.length ; i++){
    if(input[i] === "+"|| input[i] === "-"){
        a.push(parseInt(temp));
        a.push(input[i]);
        temp = "" 
    }else if(i == input.length-1){
        temp += input[i];
        a.push(parseInt(temp));
        tmep = "";
    }   
    else{
        temp += input[i];
    }
}

while (a.length) {
    let data = a.pop()
    if(data == "+"){
        
    }else if(data == "-"){
        ma.push(tempsum);
        tempsum = 0;
    }else{
        tempsum += data;
    }
}

for(let k of ma){
    tempma -= k;
}
sum = tempsum + tempma;
console.log(sum)