let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

for(let a = 1; a <= parseInt(input[0]); a++){
    let char = input[a].toString();
    let c = 0;
    for( i of char){
        if(i==")"){
            if(c<=0){
                c--;
                break;
            }
            c--;
        }
        if(i=="("){
            c++;
        }
    }
    if(c==0){
        console.log("YES");
    }else{
        console.log("NO");
    }
}