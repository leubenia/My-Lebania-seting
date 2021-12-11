let fs = require('fs');
let input = fs.readFileSync('test.text').toString().toString().trim().split('\n')

for(let i = 1; i <= input[0]; i++){
    let b = input[i].split(' ').map(Number);
    let rm = Math.abs(b[2]-b[5])
    let rf = b[2]+b[5];
    let a = Math.sqrt((b[0] - b[3])*(b[0] - b[3]) + (b[1] - b[4])*(b[1] - b[4]))
    if(a==0&&b[2]==b[5]){
        console.log(-1);
    }else if(rm < a&& a < rf){
        console.log(2);
    }else if(rf==a || rm==a){
        console.log(1);
    }else if(rf < a || rm > a|| a==0){
        console.log(0);
    }
}
