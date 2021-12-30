function solution(m, musicinfos) {
    var answer = '(None)';
    let my = [];
    for(let l =0 ; l < m.length ; l++){
        if(m[l+1]=="#"){
            my.push(m[l]+m[l+1])
            l++
        }else{
            my.push(m[l])
        }
    }
    let z = 0;
    for( let sing of musicinfos){
        let a = sing.split(",")
        let a1 = a[0].split(":").map(Number)
        let b1 = a[1].split(":").map(Number)
        let cont = (b1[0]*60+b1[1]) - (a1[0]*60 + a1[1])
        let chack = a[3];
        let ch = 0;
        let ct = 0;
        let chm = [];
        for(let m =0 ; m < chack.length ; m++){
            if(chack[m+1]=="#"){
                chm.push(chack[m]+chack[m+1])
                m++
            }else{
                chm.push(chack[m])
            }
        }
        let lang = chm.length;
        for(let i = 0 ; i < cont ; i++){
            if (chm[i%lang] == my[0]){
                for(let j = i ; j < cont ; j++){
                    if(ch == my.length){
                        break;
                    }
                    if(chm[j%lang] == my[ch]){
                        ch++
                    }else{
                        console.log(j, chm[j%lang], my[ch]);
                        ch = 0;
                        break;
                    }
                }
            }
        }
        if(ch == my.length){
            if(z < cont){
                answer = a[2];
                z = cont
            }
        }
    }
    return answer;
}
kk = 	["12:00,12:14,HELLO,BCBCE"]
console.log(solution("BCE",kk))