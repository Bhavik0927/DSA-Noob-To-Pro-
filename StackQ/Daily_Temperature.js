
const Daily_Temperature = (arr) =>{
    let stack = [];
    let vector = new Array(arr.length).fill(0);

    for(let i = arr.length -1; i>= 0; i--){

        while(stack.length > 0 && stack[stack.length - 1][0] <= arr[i])
        {
            stack.pop();
        }

        if(stack.length > 0){
            vector[i] = stack[stack.length -1][1] - i;
        }

        stack.push([arr[i], i]);
    }

    return vector;
}

let arr = [73,74,75,71,69,72,76,73];

console.log(Daily_Temperature(arr));