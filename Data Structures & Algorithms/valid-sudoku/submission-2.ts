class Solution {
    isValidSudoku(board: string[][]): boolean {
        let rowsMap: Map<number, Set<string>> = new Map();
        let columnsMap: Map<number, Set<string>> = new Map();
        let squaresMap: Map<number, Set<string>> = new Map();

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const value = board[i][j];
                
                if (value === '.') continue;  // Ignorar vacíos
                
                const squareKey = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                
                // Verificar y agregar a fila
                if (!rowsMap.has(i)) rowsMap.set(i, new Set());
                if (rowsMap.get(i)!.has(value)) return false;
                rowsMap.get(i)!.add(value);
                
                // Verificar y agregar a columna
                if (!columnsMap.has(j)) columnsMap.set(j, new Set());
                if (columnsMap.get(j)!.has(value)) return false;
                columnsMap.get(j)!.add(value);
                
                // Verificar y agregar a cuadrado
                if (!squaresMap.has(squareKey)) squaresMap.set(squareKey, new Set());
                if (squaresMap.get(squareKey)!.has(value)) return false;
                squaresMap.get(squareKey)!.add(value);
            }
        }
        
        return true;
    }
}