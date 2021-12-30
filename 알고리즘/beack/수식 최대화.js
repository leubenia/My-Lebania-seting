
const expression = "100-200*300-500+20";

function isdom(input) {
    let temp = '';
    let a = [];
    for(let i = 0 ; i < input.length ; i++){
        if(input[i] === "+"|| input[i] === "-" || input[i] === "*"){
            a.push(parseInt(temp));
            a.push(input[i]);
            temp = "" 
        }else if(i == input.length-1){
            temp += input[i];
            a.push(parseInt(temp));
            tmep = "";
        }   
        else{
            temp += input[i];
        }
    }
    return a;
}

function isp(input) {
    let a = input;
    let c = [];
    let sum = 0;
    let temp1 = 0;
    let temp2 = 0;
    while (a.length) {
        let data = a.pop()
        if(data == "+"){
            temp1 += +c.pop()
            temp2 += +a.pop()
            sum = temp1+temp2;
            c.push(sum);
            sum = 0;
            temp1 = 0;
            temp2 = 0;
        }else if(data == "-"){
            c.push(data);
        }else if(data == "*"){
            c.push(data);
        }else{
            c.push(data);
        }
    }
    return c;
}
function ism(input) {
    let a = input;
    let c = [];
    let sum = 0;
    let temp1 = 0;
    let temp2 = 0;
    while (a.length) {
        let data = a.pop()
        if(data == "+"){
            c.push(data);
        }else if(data == "-"){
            temp1 += +c.pop()
            temp2 += +a.pop()
            sum = temp1 - temp2;
            c.push(sum)
            sum = 0;
            temp1 = 0;
            temp2 = 0;
        }else if(data == "*"){
            c.push(data);
        }else{
            c.push(data);
        }
    }
    return c;
}

function isx(input) {
    let a = input;
    let c = [];
    let sum = 0;
    let temp1 = 0;
    let temp2 = 0;
    while (a.length) {
        let data = a.pop()
        if(data == "+"){
            c.push(data);
        }else if(data == "-"){
            c.push(data);
        }else if(data == "*"){
            temp1 += +c.pop()
            temp2 += +a.pop()
            sum = temp1*temp2;
            c.push(sum);
            sum = 0;
            temp1 = 0;
            temp2 = 0;
        }else{
            c.push(data);
        }
    }
    return c;
}



function solution(expression) {
    let answer = 0;
    let temp3 = [];
    // let iddo = isdom(expression).reverse();
    let isdo1 = isdom(expression).reverse();
    let isdo2 = isdom(expression).reverse();
    let isdo3 = isdom(expression).reverse();
    let isdo4 = isdom(expression).reverse();
    let isdo5 = isdom(expression).reverse();
    let isdo6 = isdom(expression).reverse();

    temp3.push(Math.abs(isx(ism(isp(isdo1).reverse()).reverse())[0]))
    temp3.push(Math.abs(ism(isx(isp(isdo2).reverse()).reverse())[0]))
    temp3.push(Math.abs(isx(isp(ism(isdo3).reverse()).reverse())[0]))
    temp3.push(Math.abs(isp(isx(ism(isdo4).reverse()).reverse())[0]))
    temp3.push(Math.abs(ism(isp(isx(isdo5).reverse()).reverse())[0]))
    temp3.push(Math.abs(isp(ism(isx(isdo6).reverse()).reverse())[0]))
    for(let o of temp3){
        if(answer <= o){
            answer = o;
        }
    }
    return answer;
}

console.log(solution(expression));