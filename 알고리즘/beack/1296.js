let fs = require('fs');
let input = fs.readFileSync('test.text').toString().split('\r\n');

let l = 0;
let o = 0;
let v = 0;
let e = 0;
let f = 0;
for(a of input[0]){
    a == 'L' ? l++
    : a == 'O' ? o++
    : a == 'V' ? v++
    : a == 'E' ? e++
    :0
}

for(i = 1 ; i <= input[1]; i++){
    let lc=0,oc=0,vc= 0,ec = 0;
    for(a of input[1+i]){
        a == 'L' ? lc++
        : a == 'O' ? oc++
        : a == 'V' ? vc++
        : a == 'E' ? ec++
        :0
    }
    lc+=l;
    oc+=o;
    vc+=v;
    ec+=e;
    let z =((lc+oc)*(lc+vc)*(lc+ec)*(oc+vc)*(oc+ec)*(vc+ec))%100;
    
    if(z>f){
        f = z;
        input[2] = input[1+i];
    }
    else if(z==f){
        if(input[2]>input[1+i]){
            input[2] = input[1+i];
        }
    }
}
console.log(input[2]);

