const ts1300: Array<number> = [3, 7];

const len: number = ts1300[0];
const k: number = ts1300[1];

let start: number = 1;
let end: number = k;
let res: number = 0;

while (start <= end) {
  let mid: number = Math.floor((start + end) / 2);

  let conut: number = 0;
  for (let i = 1; i <= len; i++) {
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
