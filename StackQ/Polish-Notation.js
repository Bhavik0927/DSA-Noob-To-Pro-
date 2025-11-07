/*
const Evaluate_Polish_Notation = (s) => {
    
    let tokens = s.trim().split(/\s+/);
    
    let stack = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      let a = stack.pop();
      let b = stack.pop();

      let result;
      switch (token) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = a / b;
          break;
        default:
            throw new Error(`Invalid operator : ${token}`)
      }

      stack.push(result);
    }
  }

  return stack.pop();
};


let s = "10 6 9 3 + -11 / * 17 + 5 +";

console.log(Evaluate_Polish_Notation(s));

*/

function Evaluate_Postfix_Notation(s) {
  // Step 1: Split input string into tokens (space-separated)
  const tokens = s.trim().split(/\s+/);

  // Step 2: Create an empty stack to store operands
  const stack = [];

  // Step 3: Traverse tokens from left to right (for postfix)
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    // Step 4: If token is a number → push to stack
    if (!isNaN(token)) {
      stack.push(Number(token));
    }
    // Step 5: Else, token is an operator → pop 2 operands
    else {
      const b = stack.pop(); // right operand
      const a = stack.pop(); // left operand

      let result;
      switch (token) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = b - a;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = b / a;
          break;
        default:
          throw new Error(`Invalid operator: ${token}`);
      }

      // Step 6: Push the result back to stack
      stack.push(Math.trunc(result));
    }
  }

  // Step 7: The final result is the only value left in stack
  return stack.pop();
}

// ✅ Example usage
let s = "10 6 9 3 + -11 / * 17 + 5 +";
console.log(Evaluate_Postfix_Notation(s)); // Output: 22
