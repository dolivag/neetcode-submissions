class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const charMap: Map<string, string> =  new Map();
        charMap.set('}', '{');
        charMap.set(']', '[');
        charMap.set(')', '(');

        const isClosingChar = (char) => {
            return (char === '}') || (char === ']') || (char === ')');
        }

        const isItsOpenChar = (closingChar, char) => {
            return charMap.get(closingChar) === char ? true : false;
        }

        let chars: string[] = [];

        for (let char of s) {
            if (isClosingChar(char)) {
                console.log("Is CLOSING char", char)
                if (isItsOpenChar(char, chars[chars.length-1])) {
                    console.log("Comparing", char, chars[chars.length-1]);
                    chars.pop();
                    console.log("---> Stack is ", chars)
                } else {
                    console.log("Current char ", char, " is a closing char and the last position in stach is not is opening char")
                    return false;
                }
            } else {
                console.log("is OPENING", char)
                chars.push(char);
                console.log("---> Stack is ", chars)
            }
        }
        return chars.length === 0;
    }
}
