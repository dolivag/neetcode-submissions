class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let i: number = 0; 
        let j: number = cleaned.length-1;
        while (i <= j) {
            if (cleaned.charAt(i) !== cleaned.charAt(j)) return false;
            i++; 
            j--;
        }
        return true;
    }
}
