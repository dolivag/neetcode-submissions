class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        const positionsMap: Map<string, string[]> = new Map();
        for (let str of strs) {
            let positions: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            for (let i = 0; i < str.length; i++) {
                positions[str.toLowerCase().charCodeAt(i) % 97] += 1
            }
            const key = positions.toString(); // o JSON.stringify(positions)

            if (!positionsMap.has(key)) {
                positionsMap.set(key, []);
            }
            positionsMap.get(key)!.push(str);        
        }
        return [...positionsMap.values()]
    }
}
