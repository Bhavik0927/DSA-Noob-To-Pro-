// Remove outermost paranthesis

const Remove_paranthesis = (str) => {

    let result = '';
    let depth = 0;

    for (let ch of str) {
        if (ch === '(') {

            if (depth > 0) { result += '('; }

            depth++
        } else {
            depth--;
            if (depth > 0) {
                result += ')'
            }
        }
    }

    return result;
}


let str = '(()()())';

console.log(Remove_paranthesis(str));
