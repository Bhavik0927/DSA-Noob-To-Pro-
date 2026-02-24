let swap = (arr,i,j) =>{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let Next_Permutation12 = (arr) => {

    let n = arr.length;
    let i = n - 2;
    while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--;
    }

    if (i > 0) {

        let j = n - 1;

        while (arr[j] <= arr[i] ){
            j--;
        }

        swap(arr,i,j);
    }

    let left = i+1;
    let right = n-1;

    while(left >= right){
        swap(arr,left,right);
        left++;
        right--;
    }

    return arr;
}

const arr = [1,2,3];
Next_Permutation12(arr);
console.log(arr);
