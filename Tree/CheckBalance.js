class Node{
    constructor(root){
        this.val = root;
        this.left = null;
        this.right = null;
    }
}



const height = (node) =>{
    if(node === null) return 0;

    return 1 + Math.max( (height.left),(height.right)  );
}

const balacedCheck = (root) =>{
    if(root === null) return false;

    let leftNode = height(root.left);
    let rightNode = height(root.right);

    if(Math.abs(leftNode - rightNode) > 1){
        return false;
    }


    return balacedCheck(root.left) && balacedCheck(root.right);
}