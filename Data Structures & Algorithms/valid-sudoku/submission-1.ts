class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        let rowsMap: Map<number, string[]> = new Map();
        let columnsMap: Map<number, string[]> = new Map();
        let squaresMap: Map<number, string[]> = new Map();
        const empty = '.';
        let i:number, j: number;

        for (i = 0; i< 9; i++) {
            for (j = 0; j < 9; j++) {
                let value = board[i][j];
                const rowValues = rowsMap.get(i) ?? [];
                if (rowValues.includes(value) && value !== empty) {
                    return false;
                }
                rowValues.push(value);
                rowsMap.set(i, rowValues);
                
                const columnValues = columnsMap.get(j) ?? [];
                if (columnValues.includes(value) && value !== empty) {
                    return false;
                }
                columnValues.push(value);
                columnsMap.set(j, columnValues);

                const squareValues = squaresMap.get(Math.trunc(i/3)*3 + Math.trunc(j/3)) ?? [];
                if (squareValues.includes(value) && value !== empty) {
                    return false;
                }
                squareValues.push(value);
                squaresMap.set(Math.trunc(i/3)*3 + Math.trunc(j/3), squareValues);
            }
        }
        return true;
    }
}
