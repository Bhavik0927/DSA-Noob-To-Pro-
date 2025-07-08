
const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const next_permutation = (arr) => {
    let n = arr.length;

    // first we find an i;
    let i = n - 2;
    while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--
    }
    // Now we got an i;


    // second find j which is greater than i 
    let j = n - 1;
    while (arr[j] <= arr[i]) {
        j--;
    }

    // Now we got an j so we swap them
    swap(arr, i, j);


    // after swapping we have rest of the array is unsorted after an i index;
    
    let left = i + 1, right = n - 1;
    while (left < right) {
        swap(arr, left, right);
        left++;
        right--;
    }

    return arr;
}


// let arr = [1,2,3,6,5,4];
let arr = [3, 1, 4, 2];

next_permutation(arr);

console.log(arr);
