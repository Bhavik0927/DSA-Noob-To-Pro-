// Find the number that appears once, and other numbers twice.

const AppearOnce = (arr) =>{
    
    for(let i = 0; i< arr.length; i++){
        const num = arr[i];
        let count = 0;

        for(let j = 0; j < arr.length; j++){

            if(arr[j] === num){
                count++;
            }
        }

        if(count === 1){
            return num;
        }
    }
    return -1
}

let arr = [2,2,1,1,4,5];

console.log(AppearOnce(arr) );