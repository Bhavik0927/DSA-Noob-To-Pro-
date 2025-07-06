// Phone Keypad Combination

const Get_Combination = (digits, index, map, result, current) => {

    if (index === digits.length) {
        result.push(current.join(''));
        return;
    }

    let digit = digits[index];
    
    let idx_letter = map[Number(digit)];
   

    for (let str of idx_letter) {
        current.push(str);
        Get_Combination(digits, index + 1, map, result,current);
        current.pop();  // Backtracking step
    }
}


const PhoneCombination = (digits) => {

    if (digits.length === 0) return [];

    const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];



    const result = [];
    const current = [];

    Get_Combination(digits, 0, map, result, current);

    return result;

}

console.log(PhoneCombination('678'));