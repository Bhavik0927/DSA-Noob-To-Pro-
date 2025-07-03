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