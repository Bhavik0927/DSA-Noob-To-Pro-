
const FindDuplicates = (nums) =>{
    let map = {};
    let result = [];

    for(let num of nums){
        if(map[num]){
            result.push(num);
        }else{
            map[num] = 1;
        }
    }
    return result;
}

let arr = [1,2,3,2,4,1,6];

console.log(FindDuplicates(arr));