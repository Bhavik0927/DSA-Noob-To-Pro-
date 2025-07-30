// Dry Run This code
const First_Negative_OnWindow = (arr,k) =>{
    let result = [];
    let queue = [];

    let i = 0 ,j = 0;

    while(j < arr.length){

        if(arr[j] < 0){
            queue.push(j);
        }

        // Window Banne ki hai 
        if((j-i+1) < k){
            j++;
        }

        // Window complete ho gayi hai
        else if((j-i+1) === k){

            if(queue.length > 0){
                result.push(arr[queue[0]]);
            }else{
                result.push(0);
            }

            // It's imp step
            if(queue.length > 0 && queue[0] === i){
                queue.shift();
            }

            i++;
            j++;
        }
    }

    return result;
};

const arr = [12,-1,-7,8,-15,30,16,28];
let k = 3;

console.log(First_Negative_OnWindow(arr,k));

// o/p ::  [ -1, -1, -7, -15, -15, 0 ]
