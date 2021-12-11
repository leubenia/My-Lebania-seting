let fs = require('fs');
let input = fs.readFileSync('test.text').toString().split("\n").map(Number)
for(x of input){
    if(x == 0)continue;
    let a = x
    let n = a*2
    let pn = 0;
    let prime =[];
    let erased = [];
    for (let i=2; i<=n; ++i) {
        if (!erased[i]) {
            if(i>a)
            prime[pn++] = i;
            for (let j=i*2; j<=n; j+=i)
                erased[j] = true;
        }
    }
    console.log(pn++)
}
