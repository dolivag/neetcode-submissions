class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
       let i = 0;
        let j = s.length - 1;
        
        while (i < j) {
            // Saltar no-alfanuméricos desde la izquierda
            while (i < j && !this.isAlphaNumeric(s[i])) {
                i++;
            }
            // Saltar no-alfanuméricos desde la derecha
            while (i < j && !this.isAlphaNumeric(s[j])) {
                j--;
            }
            
            if (s[i].toLowerCase() !== s[j].toLowerCase()) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
    
    private isAlphaNumeric(char: string): boolean {
        return /[a-z0-9]/i.test(char);
    }
}
