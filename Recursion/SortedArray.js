// Search in Rotated Sorted Array

// IN RECURSIVE FORM
/* const ModifiedBinary_Search = (arr, start, end, target) => {

    
    if (start > end) return -1; // base case

    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === target) return mid;

    if (arr[start] <= arr[mid]) {
        if (arr[start] <= target && target <= arr[mid]) {
            return ModifiedBinary_Search(arr, start, mid - 1, target);
        } else {
            return ModifiedBinary_Search(arr, mid + 1, end, target);
        }
    } else {
        if (arr[mid] <= target && target <= arr[end]) {
            return ModifiedBinary_Search(arr, mid + 1, end, target);
        } else {
            return ModifiedBinary_Search(arr, start, mid - 1, target)
        }
    }
}


const arr = [5, 6, 7, 8, 9, 10, 1, 2, 3];
let target = 3;

const ans = ModifiedBinary_Search(arr, 0, arr.length - 1, target);
console.log(ans);         */


//  ITERATIVE WAY


const Iterative_Solution = (arr, target) => {
    let start = 0, end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (arr[mid] === target) return mid;


        // For Duplicates elements
        if(arr[start] === arr[mid] && arr[mid] === arr[end]){
            start++;
            end--;

        }
        // Left sorted
         else if (arr[start] <= arr[mid]) {
            if (target >= arr[start] && target < arr[mid]){
                end = mid-1
            }else{
                start = mid + 1;
            }
        }
        // Right Sorted
         else {
            if(target >= arr[mid] && target <= arr[end]){
                start = mid +1;
            }else{
                end = mid -1;
            }
        }

    }

    return -1;
}

const arr = [1,0,1,1,1];
let target = 0;

const ans = Iterative_Solution(arr,target);

console.log(ans);