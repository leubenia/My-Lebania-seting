let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');
let que = []
let f = 0;
let a = []
for(let i = 1 ; i <= input[0] ; i++ ){
    const [k , b] = input[i].split(" ")
    const length = que.length;
    switch (k) {
        case "size":
            a.push(length-f)
            break;
        case "pop":
            if(f === length){
                a.push('-1')
            }else{
                a.push(que[f])
                f++;
            }
            break;
        case "empty":
            a.push(f===length? 1 : 0)
            break;
        case "back":
            if(f === length){
                a.push('-1')
            }else{
                a.push(que[length-1])
            }
            break;
        case "front":
            if(f === length){
                a.push('-1')
            }else{
                a.push(que[f])
            }
            break;
        case "push":
            que.push(b)
            break;
    }
}
console.log(a.join('\n'))