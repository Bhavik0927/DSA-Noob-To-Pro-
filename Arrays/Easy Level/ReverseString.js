

const reverseString = (str) =>{
    for(let i = 0; i< Math.floor(str.length / 2); i++){
        let temp = str[i];
        str[i] = str[str.length - 1 - i];
        str[str.length - 1 - i] = temp;
    }
}

const str = ['h','e','l','l','o','z'];
reverseString(str);
console.log(str);