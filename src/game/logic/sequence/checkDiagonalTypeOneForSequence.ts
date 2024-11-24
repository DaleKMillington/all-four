// Project
import { CellColorsType } from "../../../constants/cellColors.const";

// Declarations
export const checkDiagonalTypeOneForSequence = (sequenceLength: number) => (
    updatedCells: CellColorsType[][],
    colorToCheck: CellColorsType
): boolean => {
    // Check diagonal type one (bottom-left to top-right direction) for a sequence of the given cell color. 
    // There can be 3 different versions of this function to check for sequences of 2, 3, or 4.

    for (let row = (sequenceLength - 1); row < updatedCells.length; row++) {
        for (let col = 0; col < updatedCells[row].length - (sequenceLength - 1); col++) {
            const position1 = updatedCells[row][col];
            const position2 = updatedCells[row - 1][col + 1];

            const positions = [position1, position2];

            sequenceLength >= 3 && positions.push(updatedCells[row - 2][col + 2]);
            sequenceLength === 4 && positions.push(updatedCells[row - 3][col + 3]);

            const isSequence = positions.every(position => colorToCheck === position);

            if (isSequence) {
                return true;
            }
        }
    }
    
    return false;
};
