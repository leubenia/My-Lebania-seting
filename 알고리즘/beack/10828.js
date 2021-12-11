let fs = require('fs');
let input = (fs.readFileSync('test.text') + '').toString().split('\r\n');
let stack = []
input.shift()
input.forEach((sentence)=>{
    switch (sentence) {
        case "size":
            console.log(stack.length)
            break;
        case "pop":
            console.log(stack.pop()||-1)
            break;
        case "empty":
            console.log(stack[0] ? 0 : 1)
            break;
        case "top":
            console.log(stack[stack.length - 1] || -1)
            break;
        default:
            stack.push(sentence.split(" ")[1])
            break;
    }
})
console.log(a.join('\n'))