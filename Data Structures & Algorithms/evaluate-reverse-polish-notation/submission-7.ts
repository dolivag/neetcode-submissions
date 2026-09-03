class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let stack: number[] = [];
        let result = 0;
        for (let str of tokens) {
            if (str === '+' || str === '-' || str === '*' || str === '/') {
                let firstValue = stack.at(stack.length -2);
                let secondValue = stack.at(stack.length-1);
                let partialResult: number = 0;
                switch (str) {
                    case '+':
                        partialResult = firstValue + secondValue;
                        break;
                    case '-':
                        partialResult = firstValue - secondValue;
                        break;
                    case '*':
                        partialResult = firstValue * secondValue;
                        break;
                    case '/':
                        partialResult = Math.trunc(firstValue / secondValue);
                        break;
                    default :
                        break;
                }
                stack.pop();
                stack.pop();
                stack.push(partialResult);
            } else {
                stack.push(Number(str));
            }
        }
        return stack.pop()
    }
}
