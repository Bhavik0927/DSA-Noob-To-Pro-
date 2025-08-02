
const LongestSub_ArrayAtMostTwo = (nums) =>{
    let left = 0, maxlen = 0;

    const map = new Map();

    for(let right = 0; right < nums.length; nums++){
        let num = nums[right];

        map.set(num, (map.get(num) || 0) + 1);

        while(map.size > 2){
            const leftNum = nums[left];
            map.set(leftNum, map.get(leftNum) - 1 );

            if(map.get(leftNum) === 0){
                map.delete(leftNum);
            }
            left++;
        }

        maxlen = Math.max(maxlen,right-left + 1);
    }

    return maxlen;
    
}