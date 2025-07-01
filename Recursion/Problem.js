// Say Digit 


/* let n = 412;

const sayDigit = (n) => {

    let arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    if (n === 0) return;

    let digit = n % 10;

    n = Math.floor(n / 10);

    sayDigit(n);

    console.log(arr[digit])
}

sayDigit(n);
*/



// IsSorted Array

/* const isSortedArray = (arr, idx = 0) =>{
    if (idx === arr.length - 1) {
    return true; // reached end
  }

    if(arr[idx] > arr[idx + 1]) return false;

    return isSortedArray(arr,idx + 1);
}

let arr = [1, 2, 3, 4]
console.log(isSortedArray(arr)); 
*/


// sum of all num in array 

/* const sumofAll = (arr, idx = 0) =>{

  if (idx === arr.length -1){
    return 0;
  }

  return arr[idx] + sumofAll(arr,idx+1);
}


let arr = [21,3,13,65,7];
console.log(sumofAll(arr)); */



// Linear Search 

/* const linearSearch = (arr,idx=0, k) =>{
  if(idx === arr.length ){return false};

  if(arr[idx] === k){
    return true;
  }else{
    return linearSearch(arr,idx + 1, k)
  }
}

let arr = [3,5,1,2,6];
let k = 1;

let ans = linearSearch(arr,0, k);

if(ans){
  console.log("It's Present")
}else{
  console.log("Absent")
}
*/



// Binary Search

const print = (arr,start,end,) =>{
  for(let i = start; i<= end; i++){
      console.log(arr[i] + ' ');
  }
  console.log()
}

const BinarySearch = (arr, start, end, k) => {

  print(arr,start,end,k);

  if (start > end) return -1;

  let mid = Math.floor(start + (end - start) / 2);
  console.log("The mid is", mid);

  if (arr[mid] === k) return mid;

  if (arr[mid] > k) {
    return BinarySearch(arr, start, mid - 1, k);
  } else {
    return BinarySearch(arr, mid + 1, end, k)
  }
}


const arr = [5, 6, 7, 8, 9, 10, 1, 2, 3];
let k = 3;

const ans = BinarySearch(arr, 0, 5, k);

if (ans !== -1) {
  console.log(`It's on index ${ans} `)
} else {
  console.log("Not...");
}
