// Reverse a String

/*
const ReverseString = (str,i,j) =>{

    if(i>=j) return str;

    let temp = str[i];
    str[i] = str[j];
    str[j] = temp;

    return ReverseString(str,i+1,j-1);
}

let str = "Bhavik";

let charArray = str.split('');

let ans = ReverseString(charArray,0, charArray.length-1);

console.log(ans.join(''));
*/


// Palindrome

/* const sayPalindrome = (str, i, j) => {

    if (i >= j) return true;

    if (str[i] !== str[j]) {
        console.log("Not Palindrome");
        return false;
    }

    return sayPalindrome(str, i + 1, j - 1);

}

const str = "abcbga";

const arrStr = str.split('');

const ans = sayPalindrome(arrStr, 0, arrStr.length);

console.log(ans)

*/


// Find Power;
/* 
const Power = (a, b) => {

    if (b === 0) return 1;

    if (b === 1) return a;

    let ans = Power(a, Math.floor(b / 2) );

    if (b % 2 == 0) {
        return ans * ans;
    } else {
        return a * ans * ans;
    }
}

const ans = Power(4, 6);
console.log(ans)

*/


// Bubble Sort

/* 
const bubble_Sort = (arr,n) =>{
    if(n === 0 || n===1){
        return arr;
    }

    for(let i = 0; i<n-1; i++){
        if(arr[i] > arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }

    return bubble_Sort(arr,n-1);
}

const arr = [38,27,43,3,9,82,10];

const ans = bubble_Sort(arr, arr.length-1);

console.log(ans);

*/


// Merge Sort

/* 
const Merge = (arr,start,mid,end) =>{
    let i = start; 
    let j = mid+1;

    let temp = [];

    while(i <= mid && j <= end){
        
        if(arr[i] <= arr[j]){
            temp.push(arr[i]);
            i++;
        }else{
            temp.push(arr[j]);
            j++;
        }
    }

    while(i <= mid) {
        temp.push(arr[i]);
        i++;
    }

    while(j <= end){
        temp.push(arr[j]);
        j++;
    }


    for(let idx = 0; idx < temp.length; idx++){
        arr[start + idx] = temp[idx];
    }
}

const Merge_sort = (arr,start,end) =>{

    if(start >= end) return;

    let mid = Math.floor((start + end) /2);

    Merge_sort(arr,start,mid);

    Merge_sort(arr,mid+1,end);

    Merge(arr,start,mid,end);

}


const arr = [5,2,9,1,6,3];

 Merge_sort(arr,0,arr.length-1);

console.log(arr);


*/


// Count Inversion of count;
/*
const Merge = (arr,start,mid,end) =>{
    let i = start;
    let j = mid+1;
    let temp = [];
    let inversionCount = 0;

    while(i <= mid && j <= end){

        if(arr[i] <= arr[j]){
            temp.push(arr[i]);
            i++;
        }else{
            temp.push(arr[j]);
            j++;
            inversionCount += (mid - i + 1);
        }
    }

    while(i <= mid){
        temp.push(arr[i]);
        i++;
    }

    while(j <= end){
        temp.push(arr[j]);
        j++;
    }

    for(let idx = 0; idx < temp.length; idx++){
        arr[idx+ start] = temp[idx];
    }

    return inversionCount;
}

const MergeSort = (arr,start,end) =>{
    if(start >= end ) return 0;

    let mid = Math.floor(start + (end-start)/2);

    let leftInversion = MergeSort(arr,start,mid);

    let rightIversion = MergeSort(arr,mid+1,end);

    let invertionCount = Merge(arr,start,mid,end);

    return leftInversion + rightIversion + invertionCount;
}


let arr = [6,3,5,2,7];

let ans = MergeSort(arr,0, arr.length-1);

console.log(ans);

*/


// Quick Sort

/*
const Partion = (arr, st, end) => {
    let idx = st - 1;
    let pivot = arr[end];
    let temp;
    for (let i = st; i < end; i++) {
        if (arr[i] <= pivot) {
            idx++;
            temp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = temp;
        }
    }

    idx++;
    temp = arr[idx];
    arr[idx] = arr[end];
    arr[end] = temp;

    return idx;
}

const quick_sort = (arr, st, end) => {

    if (st >= end) return ;

    let pivotIndex = Partion(arr, st, end);

    quick_sort(arr, st, pivotIndex - 1);

    quick_sort(arr, pivotIndex + 1, end);

}

let arr = [55, 12, 6, 74, 13, 3];

quick_sort(arr, 0, arr.length - 1);

console.log(arr);
*/


// Permutation Of String 


const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

const Get_Permutation = (chars, index, result) => {
    if (index === chars.length) {
        result.push(chars.join(''));
        return;
    }

    for (let i = index; i < chars.length; i++) {

        swap(chars, i, index);

        Get_Permutation(chars, index + 1, result);

        swap(chars, i, index);

    }
}

const Permutation_String = (str) => {
    let result = [];

    if (str.length === 0) return result;

    const chars = str.split('');

    Get_Permutation(chars, 0, result);

    return result;
}


console.log(Permutation_String("abc"));
