let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split("\n")

let pado = new Array(102);

pado[1] = 1;
pado[2] = 1;
pado[3] = 1;
pado[4] = 2;
pado[5] = 2;
pado[6] = 3;
pado[7] = 4;
pado[8] = 5;
pado[9] = 7;
pado[10] = 9;

for(let j = 10; j <= 101; j++){
    pado[j] = pado[j-1] + pado[j-5];
}

for(let i = 1; i <= +input[0];i++){
    console.log(pado[+input[i]])
} 

