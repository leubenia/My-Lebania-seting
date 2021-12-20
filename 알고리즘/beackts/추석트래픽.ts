const lines:string[] = [
    "2016-09-15 01:00:04.001 2.0s",
    "2016-09-15 01:00:07.000 2s"
    ]
const se:Function = (time:number, s_e_t:Array<number[]>)=>{
    let re:number = 0;
    let start:number = time;
    let end:number = time+1000
    for(let i of s_e_t){
        if( i[1] >= start && i[0] < end ){
            re++;
        }
    }
    return re;
}

function solution(lines:string[]) {
    var answer = 0;
    let s_e_t = Array<number[]>();
    let dures:number;
    for(let line of lines){
        let timearr:number[] = []
        let [_, time, dure] = line.split(" ");
        timearr = time.split(":").map(Number);
        dures = parseFloat(dure.replace("s",""))*1000
        let end:number = (timearr[0]*3600 + timearr[1]*60 + timearr[2])*1000;
        let start:number = end - dures + 1;
        s_e_t.push([start,end]);
        for(let i of s_e_t){
            answer = Math.max( answer,se(i[0],s_e_t), se(i[1],s_e_t));
        }
    }
    return answer;
}

console.log(solution(lines));