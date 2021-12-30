const input:Array<number> = [6, 10, 20, 10, 30, 20, 50]
 
let N:number = input[0];
input.shift()
let A:number[] = input; 
let V:number[] = new Array<number>();
V.push(0);

for(let i of A){
    if(V[V.length-1] < i){
        V.push(i)
    }else{
        let left = 0;
        let right = V.length;

        while(left < right){
            let mid = Math.round((right+left)/2)
            if(V[mid] < i){
                left = mid+1
            }else{
                right = mid
            }
            V[right] = i;
        }
    }
}

console.log(V.length-1);