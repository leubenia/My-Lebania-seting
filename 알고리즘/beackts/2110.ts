const ts2110:any = [[5, 3],1,2,8,4,9]


let c:number = ts2110[0][1];
let len:number =ts2110[0][0];
let lists:number[] = new Array<number>();
for(let i = 1 ; i <= len ;i++){
    lists.push(ts2110[i]);
}
lists.sort(function(a, b) {
    return a - b;
})

let start:number = 1;
let end:number = lists[lists.length-1] - lists[0];
let d:number = 0;

let anser:number = 0;

while(start <= end){
    let mid:number = Math.round((start+end)/2)
    let numst:number = lists[0];
    let cnt:number = 1;
    for(let i = 1; i < len ; i++){
        d = lists[i] - numst;
        if(mid <= d){
            cnt++;
            numst = lists[i]
        }
    }
    if( cnt < c){
        end = mid - 1;
    }else{
        anser = mid;
        start = mid + 1;
        
    }
}
console.log(anser)