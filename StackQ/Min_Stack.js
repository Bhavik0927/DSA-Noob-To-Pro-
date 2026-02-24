// This Problem is solved in O(1) time complexity
// Space Complexity = O(n);

const stack = [];

const push = (val) =>{
    if(stack.lenght === 0){
        stack.push[val, val];
    }else{

        let minVal = Math.min(val, stack[stack.length - 1][1]);
        stack.push(val, minVal);
    }
};

const pop = () =>{
    return stack.pop();
}

const peek = () =>{
    return stack[stack.length - 1][0];
}

const get_Min = () =>{
    return stack[stack.length - 1][1];
}