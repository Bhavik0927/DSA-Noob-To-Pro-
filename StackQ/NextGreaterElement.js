// Find Next Greater element to right


const Next_Greater_Right = (arr) =>{

    let stack = [];
    let vector = [];

    for(let i = arr.length-1; i>= 0; i--){

        while(stack.length > 0 && stack[stack.length-1] <= arr[i]){
            stack.pop();
        }

        if(stack.length === 0){
            vector.push(-1);
        }else{
            vector.push(stack[stack.length-1]);
        }
        stack.push(arr[i]);
    }

    return vector.reverse();
}

const arr = [1,3,0,0,1,2,4];

console.log(Next_Greater_Right(arr));



// Find Next Greater element to left

const Next_Greater_Left = (arr) =>{
    let stack = [];
    let vector = [];

    for(let i = 0; i< arr.length; i++){
        while(stack.length && stack[stack.length-1] < arr[i] ){
            stack.pop();
        }
        if(stack.length === 0){
            vector.push(-1);
        }else if(arr[i] < stack[stack.length -1]){
            vector.push(stack[stack.length-1] );
        }
        stack.push(arr[i]);
    }

    return vector;
}

let ar = [1,3,3,2,4];
console.log(Next_Greater_Left(ar));