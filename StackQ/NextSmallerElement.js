// Nearest smaller to left 

const Next_Smaller_Left = (arr) =>{
    let stack = [];
    let vector = [];

    for(let i = 0; i< arr.length; i++){
        

        while(stack.length && stack[stack.length -1] >= arr[i]){
            stack.pop();
        }

        if(stack.length === 0){
            vector.push(-1);
        }else if(arr[i] > stack[stack.length -1]){
            vector.push(stack[stack.length -1])
        }

        stack.push(arr[i]);
    }
    return vector;
}


let arr = [4,8,1,1,2,7,0];

console.log(Next_Smaller_Left(arr));


// Nearest Smaller to Right

const Next_Smaller_Right = () =>{
    
}