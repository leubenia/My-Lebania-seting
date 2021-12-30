const input:Array<number[]> = [[5,20],[4, 42, 40, 26, 46]];

function istm(len:number,max:number,list:Array<number>) {
    
    let start:number = 0;
    let end:number = 0;
    for(let i of list){
        if(i > end){
            end = i;
        }
    }
    while (start <= end) {
        let mid:number = Math.floor((start+end)/2)
        let tempsum:number = 0;
        for(let i =0; i < len; i++){
            if(list[i]>mid){
                tempsum += list[i]-mid;
            }
        }
        if(tempsum < max){
            end = mid-1;
        }else{
            start = mid+1;
        }
    }
    return end;
}
const len:number = input[0][0];
const M:number = input[0][1];
const list:number[] = input[1];

console.log(istm(len,M,list));

