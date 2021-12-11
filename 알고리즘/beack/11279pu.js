const fs = require('fs');
const [_, ...input] = fs.readFileSync("test.text").toString().trim().split("\n").map(Number);


const num = input.map(v => +v);
const log = [];
const heap = [];
let key = 1;

function push(num) {
    heap[key] = num;
    let index = key;
    key++;
    up(index);
    
}
function up(index) {
    if(index <= 1){
        return;
    }
    let currentIndex = index;
    while (currentIndex > 2) {
        const parentIndex = parseInt((currentIndex - 1) / 2);
  
        if (heap[parentIndex] >= heap[currentIndex]) break;
  
        [heap[currentIndex], heap[parentIndex]] = [
          heap[parentIndex],
          heap[currentIndex],
        ];
        currentIndex = parentIndex;
    }
}
function del() {
    if(key-1 == 1){
        key--;
        return heap.pop();
    }
    let re = heap[1];
    heap[1] = heap.pop();
    key--;
    down(key)
    return re;
}

function down(index) {
    const leftIndex = 2 * index;
    const rightIndex = 2 * index + 1;
    const length = key;
    let largestIndex = index;

    if (leftIndex < length && heap[leftIndex] > heap[largestIndex]) {
      largestIndex = leftIndex;
    }

    if (rightIndex < length && heap[rightIndex] > heap[largestIndex]) {
      largestIndex = rightIndex;
    }

    if (largestIndex !== index) {
      [heap[index], heap[largestIndex]] = [heap[largestIndex], heap[index]]
      [heap[index], heap[largestIndex]] = [heap[largestIndex], heap[index]]
      down(largestIndex);
    }
}



num.forEach((data)=>{
    if(data !== 0 ){
        push(data);
    }else{
        if(key === 1){
            log.push(0)
        }else{
            log.push(del())
            console.log(heap)
        }
    }
})
console.log(log.join('\n'))