
const Longest_sub_array = (arr, k) => {
    let start = 0;
    let sum = 0;
    let maxLen = 0;
    let subArrayStart = -1, subArrayEnd = -1

    for (let end = 0; end < arr.length; end++) {

        sum += arr[end];

        while (sum > k) {
            sum -= arr[start];
            start++;
        }

        if (sum === k) {
            const current_len = end - start + 1;

            if (current_len > maxLen) {
                maxLen = current_len;
                subArrayStart = start;
                subArrayEnd = end;

            }
        }
    }

    const result_Array = maxLen > 0 ? arr.slice(subArrayStart, subArrayEnd + 1) : [];

    return {
        maxLen,
        subarray: result_Array
    };
}

let arr = [2, 3, 5, 1, 9];

let ans = Longest_sub_array(arr, 10);

console.log(ans);


