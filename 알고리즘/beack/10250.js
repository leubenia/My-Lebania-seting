let fs = require('fs');
let input = fs.readFileSync('test.text').toString().split('\n');
for(let i = 1; i <= input[0] ; i++){
    let a = input[i].split(' ');
    console.log((a[2]%a[0]==0?a[0]:a[2]%a[0])*100+Math.ceil(a[2]/a[0]))
}
