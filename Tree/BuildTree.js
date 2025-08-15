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

const InOrderTraversal = (root) =>{
    if(root === null) return [];

    return [
        ...InOrderTraversal(root.left),
        root.data,
        ...InOrderTraversal(root.right)
    ]
}

const preOrderTraversal = (root) =>{
    if(root === null) return [];

    return [
        root.data,
        ...preOrderTraversal(root.left),
        ...preOrderTraversal(root.right)
    ]
}

const arr = [1, 2, -1, -1, 3, -1, -1];

const root = BuildTree(arr);

console.log(InOrderTraversal(root));
console.log(preOrderTraversal(root));

console.log(root);

