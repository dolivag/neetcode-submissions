class Solution {
    private encodeDecodeSeparator = "EDSeparator"
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded_str = "";
        for (let str of strs) {
            encoded_str = encoded_str.concat(str,this.encodeDecodeSeparator);
        } 
        return encoded_str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const words = str.split(this.encodeDecodeSeparator);
        words.pop();
        return words;
    }
}
