let Remove_Odd_Number = (str) =>{
    for(let i = str.length-1; i>=0; i--){
        let ch = str[i];
        if(parseInt(ch) % 2 === 1){
            return str.slice(0, i + 1);
        }
    }
    return -1;
}

const str = '4206';


console.log(Remove_Odd_Number(str));
