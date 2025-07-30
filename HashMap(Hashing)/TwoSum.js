
const TwoSum = (nums, target) => {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];

        if(map.hasOwnProperty(diff)){
            return [map[diff],i];
        }

        map[nums[i]] = i;
    }

    return [];
}

const nums = [2,7,11,15];
const target = 13;

console.log(TwoSum(nums,target));