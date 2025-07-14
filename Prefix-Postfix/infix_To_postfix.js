
const getPredence = (op) => {
    if (op === '+' || op === '-') return 1;
    if (op === '*' || op === '/') return 2;
    if (op === '^') return 3;

    return 0;
}

const Convert_Infix_To_Postfix = (exp) => {
    let result = '';
    let stack = [];

    for (let i = 0; i < exp.length; i++) {
        let char = exp[i];

        if (char.match(/[a-zA-Z0-9]/)) {
            result += char;
        } else if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            while (stack.length && stack[stack.length - 1] !== '(') {
                result += stack.pop();
            }
            stack.pop();
        } else {
            while (stack.length && getPredence(stack[stack.length - 1] >= getPredence(char))) {
                result += stack.pop();
            }
            stack.push(char);
        }

    }

    while (stack.length) {
        result += stack.pop();
    }

    return result;

}

let exp = "A+(B*C)";

console.log(Convert_Infix_To_Postfix(exp));