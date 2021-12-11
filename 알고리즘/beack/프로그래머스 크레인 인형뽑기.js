let board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
let moves = [1,5,3,5,1,2,1,4];

function up(num, board) {
    let xl = board.length;
    let yl = board[0].length;
    for(let i = 0; i < yl; i++){
        let re = board[i][num];
        if(re !== 0){
            board[i][num] = 0;
            return re;
        }
    }
    return 0;
}


function solution(board, moves) {
    var answer = 0;
    let stack = [];
    for(let a of moves){
        let check = up(a-1, board);
        if(check == 0){
            break;
        }
        if(stack[stack.length-1] == check){
            stack.pop()
            answer += 2;
        }else{
            stack.push(check)
        }
    }
    return answer;
}