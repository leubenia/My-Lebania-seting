let fs = require('fs');
let input = fs.readFileSync('test.text').toString().split('\n');
for(let i = 1 ; i <= input[0] ; i++){
    let a = input[i].split(' ');
    let d = a[1]-a[0];
    let n = 0;
    while (true) {
        if(d <= n*(n+1)){
            break;
        }
        n++;
    }
    if(d<=n**2){
        console.log(n*2-1)
    }
    else{
        console.log(n*2)
    }
}

