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

const isSortedArray = (arr, idx = 0) =>{
    if (idx === arr.length - 1) {
    return true; // reached end
  }

    if(arr[idx] > arr[idx + 1]) return false;

    return isSortedArray(arr,idx + 1);
}

let arr = [1, 27, 3, 4]
console.log(isSortedArray(arr))




