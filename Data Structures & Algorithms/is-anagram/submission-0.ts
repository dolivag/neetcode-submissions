class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        let index: number = 0;

        let charsS: Record<string, number> = {};
        let charsT: Record<string, number> = {};

        for (index; index < s.length; index++) {
            charsS[s.charAt(index)] = (charsS[s.charAt(index)] || 0 ) +1;
            charsT[t.charAt(index)] = (charsT[t.charAt(index)] || 0 ) +1;
        }

        const sortedS = JSON.stringify(Object.keys(charsS).sort().map(k => ({ [k]: charsS[k] })));
        const sortedT = JSON.stringify(Object.keys(charsT).sort().map(k => ({ [k]: charsT[k] })));
        
        if (sortedS === sortedT) return true;
        return false;
    }
}
