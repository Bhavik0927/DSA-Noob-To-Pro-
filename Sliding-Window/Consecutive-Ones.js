// Maximum Consecutive Ones |||

const longestConsecutive = (nums,k) =>{
    let left = 0, maxLen = 0, countZero = 0;

    for(let right = 0; right < nums.length; right++){

        if(nums[right] === 0) countZero++;

        while(countZero > k){
            if(nums[left] === 0) countZero--;
            left++;
        }

        maxLen = Math.max(maxLen, right-left + 1);

    }

    return maxLen; 
}

let nums = [1,1,1,0,0,0,1,1,1,1,0];
let k = 2;

console.log(longestConsecutive(nums,k))  // 6