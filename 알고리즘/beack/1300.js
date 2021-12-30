const fs = require('fs');
const ts1300 = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
var len = +ts1300[0];
var k = +ts1300[1];
var start = 1;
var end = k*k;
var res = 0;
while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    
    var conut = 0;
    for (var i = 1; i <= len; i++) {
        conut += Math.min(len, Math.floor(mid / i));
    }
    
    if (conut >= k) {
        res = mid;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
}
console.log(res);
