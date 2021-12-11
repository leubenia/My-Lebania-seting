let fs = require('fs');
let input = fs.readFileSync('test.text').toString().split('\n')
let f = [];
let s = [];
let c = 1;
let is = false;
for(let i = 1 ;i <= input[0] ;i++){
    while(c <= input[i]){
        s.push(c)
        c++;
        f.push("+");  
    }
    if(s[s.length-1] == input[i]){
        s.pop();
        f.push("-");
    }else{
        is = true;
        break;
    }
}
// console.log(f)
// console.log(s)

if(is){
    console.log("NO");
}else{
    console.log(f.join('\n'));
}