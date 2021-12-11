let fs = require('fs');
let input = fs.readFileSync('test.text').toString().split('\r\n')

let ad = new Map([
    ["black", 0],
    ["brown", 1],
    ["red",   2],
    ["orange",3],
    ["yellow",4],
    ["green", 5],
    ["blue",  6],
    ["violet",7],
    ["grey",  8],
    ["white", 9]
])
let ac = new Map([
    ["black", 1],
    ["brown", 10],
    ["red",   100],
    ["orange",1000],
    ["yellow",10000],
    ["green", 100000],
    ["blue",  1000000],
    ["violet",10000000],
    ["grey",  100000000],
    ["white", 1000000000]
])
const a = ad.get(input[0].trim())
const b = ad.get(input[1].trim())
const c = ac.get(input[2].trim())
console.log((a*10+b)*c)