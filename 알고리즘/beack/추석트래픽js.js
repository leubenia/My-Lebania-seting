var lines = [
    "2016-09-15 01:00:04.001 2.0s",
    "2016-09-15 01:00:07.000 2s"
];
var se = function (time, s_e_t) {
    var re = 0;
    var start = time;
    var end = time + 1000;
    for(let i of s_e_t){
        if( i[1] >= start && i[0] < end ){
            re++;
        }
    }
    return re;
};
function solution(lines) {
    var answer = 0;
    var s_e_t = Array();
    var dures;
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        var timearr = [];
        var _a = line.split(" "), _ = _a[0], time = _a[1], dure = _a[2];
        timearr = time.split(":").map(Number);
        dures = parseFloat(dure.replace("s", "")) * 1000;
        var end = (timearr[0] * 3600 + timearr[1] * 60 + timearr[2]) * 1000;
        var start = end - dures + 1;
        s_e_t.push([start, end]);
        for(let i of s_e_t){
            answer = Math.max( answer,se(i[0],s_e_t), se(i[1],s_e_t));
        }
    }
    return answer;
}
console.log(solution(lines));
