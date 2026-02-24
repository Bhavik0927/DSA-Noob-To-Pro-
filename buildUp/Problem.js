

const reveseString = (str) =>{
    const rev = 
    str.split('')
    .filter((e,index) => 
        {return index % 3 === 0 ;} )
    .reverse()
    .join('');

    console.log(rev);
}

reveseString("HELLOWORLD");


let arr = [6,3,5,2,7];

console.log(arr.length);  //5
console.log(arr.length-1) // 4