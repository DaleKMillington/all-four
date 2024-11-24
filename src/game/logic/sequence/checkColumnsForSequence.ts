// Project
import { CellColorsType } from "../../../constants/cellColors.const";

// Declarations
export const checkColumnsForSequence = (sequenceLength: number) => (
    updatedCells: CellColorsType[][],
    colorToCheck: CellColorsType
): boolean => {
    // Check columns for a sequence of the given cell color. 
    // There can be 3 different versions of this function to check for sequences of 2, 3, or 4.

    for (let col = 0; col < updatedCells[0].length; col++) {
        for (let row = 0; row < updatedCells.length - (sequenceLength - 1); row++) {
            const position1 = updatedCells[row][col];
            const position2 = updatedCells[row + 1][col];

            const positions = [position1, position2];

            sequenceLength >= 3 && positions.push(updatedCells[row + 2][col]);
            sequenceLength === 4 && positions.push(updatedCells[row + 3][col]);

            const isSequence = positions.every(position => colorToCheck === position);

            if (isSequence) {
                return true;
            }
        }
    }
    
    return false;
};
