// Iterative Approch

class Node{
    constructor(val){
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

let idx = -1;
const BuildTree = (arr) => {

    idx++;
    if (idx >= arr.length || arr[idx] === -1) {
        return null;
    }

    const node = new Node(arr[idx]);

    node.left = BuildTree(arr);
    node.right = BuildTree(arr);

    return node;
}


// InOrder Traversal
const Inorder_Iterative = (root) =>{
    let stack = [];
    let result = [];
    let current = root;

    while(current != null || stack.length > 0){

        while(current != null){
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();
        result.push(current.val);
    }

    return result;
}

// preOrder Traversal

const PreOrderTraversal = (root) =>{
    if(root === null) return [];

    let stack = [root];
    let result = [];

    while(stack.length > 0){
        let current = stack.pop();
        result.push(current.val);

        if(current.right != null){
            stack.push(current.right);
        }

        if(current.left != null){
            stack.push(current.left);
        }
    }
    
    return result;
}

//Using Two Stack
const postOrderTraversal = (root) =>{
    if(root != null) return [];

    let stack1 = [root];
    let stack2 = [];
    let result = [];

    while(stack1.length > 0){
        let node = stack1.pop();
        stack2.push(node);

        if(node.left)  {stack1.push(node.left)};
        if(node.right) {stack1.push(node.right)};

    }

    while(stack2.length > 0){
        result.push(stack2.pop().val);
    }

    return result;
}

const arr = [1, 2, -1, -1, 3, -1, -1];

const root = BuildTree(arr);

console.log(Inorder_Iterative(root));