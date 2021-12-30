class treeNode {
    data:string|number;
    left:any; //이부분 왜 treeNode|null 이 안먹을까???
    right:any;
    constructor(data:string|number) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}
 
let root:treeNode;


function inster(arr:string, root:treeNode, i:number) {
    if(i < arr.length){
        root = new treeNode(arr[i]);
        root.left = inster(arr,root.left,2*i+1);
        root.right = inster(arr,root.right,2*i+2);
    }
    return root;
}

function 중위순회(root:treeNode, answer:Array<number|string>) {
    if(root !== null){
        중위순회(root.left, answer);
        answer.push(root.data);
        중위순회(root.right, answer);
    }
}

function 전위순회(root:treeNode, answer:Array<number|string>) {
    if(root !== null){
        answer.push(root.data);
        전위순회(root.left, answer);
        전위순회(root.right, answer);
    }
}

function 후위순회(root:treeNode, answer:Array<number|string>) {
    if(root !== null){
        후위순회(root.left, answer);
        후위순회(root.right, answer);
        answer.push(root.data);
    }
}

function solution(req:string) {
    let answer:Array<number|string> = []
    let answer2:Array<number|string> = []
    let answer3:Array<number|string> = []
    let tree = inster(req, root, 0)
    전위순회(tree, answer);
    중위순회(tree, answer2);
    후위순회(tree, answer3);
    return {answer, answer2 , answer3};
}
console?.log(solution("ABCDEFGH"))