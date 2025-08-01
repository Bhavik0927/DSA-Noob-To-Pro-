
// Brute force

const MaximumOfAll = (arr,k) =>{
    let result = [];

    for(let i = 0; i <= arr.length - k; i++){
        let maxVal = -Infinity;

        for(let j = i; j < i+k; j++){
            maxVal = Math.max(maxVal,arr[j]);
        }
        result.push(maxVal);
    }

    return result;
}

let arr = [1,3,-1,-3,5,3,6,7];
let k = 3;

// console.log(MaximumOfAll(arr,k));


// Optimal Approch with the help of (Deque Data Structure)

const MaxOfSub_Array = (arr,k) =>{
    let deque = [];
    let res = [];

    let i = 0, j = 0;

    while(j < arr.length){

        // It means curr.elements ke left side elemnt small rahenge to wo kabhi max nahi ho sakte to unko pop kardo back se...
        while(deque.length > 0 && deque[deque.length - 1] < arr[j]){
            deque.pop();
        }


        deque.push(arr[j]);

        // Jab tak window banti nahi tab tak karo
        if(j-i+1 < k){
            j++;
        }

        // Now window is completed...
        else if(j-i+1 === k){
            res.push(deque[0]);

            // front side se remove karo
            if(deque[0] === arr[i]){
                deque.shift();
            }

            i++;
            j++;
        }
    }

    return res;
}


let arr1 = [1,3,-1,-3,5,3,6,7];
let k1 = 3;

console.log(MaxOfSub_Array(arr1,k1));