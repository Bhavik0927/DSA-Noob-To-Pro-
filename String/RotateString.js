// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
// A shift on s consists of moving the leftmost character of s to the rightmost position.
//For example, if s = "abcde", then it will be "bcdea" after one shift.


const Rotate_string = (str,goal) =>{
    if(str.length !== goal.length) return false;

    return (str + str).includes(goal);
}

let str = "abcde";
let goal = "bcdea";

console.log(Rotate_string(str,goal));
