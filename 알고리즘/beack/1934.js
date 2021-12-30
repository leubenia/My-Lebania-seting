let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

for(let i = 1 ; i <= +input[0];i++){
    let a ;
    let b ;
    let data = input[i].split(' ')
    if(+data[0]> +data[1]){
        a = +data[0];
        b = +data[1];
    }else{
        a = +data[1];
        b = +data[0];
    }

    function uc(a,b) {
        let num = a%b
        if(num == 0){
            return b;
        }
        return uc(b,num);
    }
    let min = uc(a,b);
    let max = parseInt(a/min)*parseInt(b/min)*min;
    console.log(max)
}
