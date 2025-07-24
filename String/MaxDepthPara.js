let maxDepth_Paranthesis = (s) =>{
    let depth = 0;
    let maxDepth = 0;

    for(let char of s){
        if(char === '('){
            depth++;
            maxDepth = Math.max(depth,maxDepth);
        }else if(char === ')'){
            depth--;
        }
    }

    return maxDepth;
}


let s = "((1+(2*3))+((8)/4))+1";

console.log(maxDepth_Paranthesis(s));