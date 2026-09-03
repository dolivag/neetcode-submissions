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
                if (isItsOpenChar(char, chars[chars.length-1])) {
                    chars.pop();
                } else {

                    return false;
                }
            } else {
                chars.push(char);
            }
        }
        return chars.length === 0;
    }
}
