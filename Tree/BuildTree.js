let idx = -1;

class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

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


const arr = [1, 2, -1, -1, 3, -1, -1];

const root = BuildTree(arr);

console.log(root);

