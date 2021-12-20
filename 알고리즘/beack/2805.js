const fs = require('fs');
const [n,t] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const N = n.split(' ')[1];
const trees =[];
let max = 0;
t.split(' ').forEach(v=>{
  v = +v;
  if(+v>max) max=v;
  trees.push(v);
})

let min = 0;
let answer = 0;
while(min<=max){
  let mid = Math.floor((min+max)/2);
  let cnt =0; 
  trees.forEach(tree=>{
    let garbage = tree-mid;
    if(garbage>0) cnt+=garbage
  })
  if(cnt>=N){
    if(mid>answer) answer=mid;
    min=mid+1;
  }else{
    max=mid-1
  }
}
console.log(answer)