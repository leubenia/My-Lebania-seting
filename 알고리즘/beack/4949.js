let fs = require('fs');

let input = fs.readFileSync('test.text').toString().trim().split('\n');
input.filter((v)=> v!=='.').forEach((str)=>{
    let c = [];
    st = 1;
    for( i of str){
        if(i==")"){
            if(c[st-1] != "("){
                st = -1;
                break;
            }
            c[st-1] = '';
            st--;
        }
        if(i=="("){
           c[st] = i;
           st++
        }
        if(i=="]"){
            if(c[st-1] != "["){
                st = -1;
                break;
            }
            c[st-1] = '';
            st--;
        }
        if(i=="["){
           c[st] = i;
           st++
        }
    }
    if(st == 1){
        console.log("yes")
    }else{
        console.log("no")
    }
})
