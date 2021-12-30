let fs = require('fs');
let input = fs.readFileSync('test.text').toString().split('\n');
let a = input[1].split(' ');
let Y = 0;
let M = 0;
for(b of a){
    Y+=parseInt(b/30)*10+10
    M+=parseInt(b/60)*15+15
}
let f;
Y<M?f=`Y ${Y}`:M<Y?f=`M ${M}`:M==Y?f=`Y M ${Y}`:0
console.log(f)