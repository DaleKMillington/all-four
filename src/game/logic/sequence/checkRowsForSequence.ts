// Project
import { CellColorsType } from "../../../constants/cellColors.const";

// Local
import { determineIsSequence } from "./determineIsSequence";

// Declarations
export const checkRowsForSequence = (sequenceLength: number) => (
    updatedCells: CellColorsType[][],
    colorToCheck: CellColorsType
): boolean => {
    // Check rows for a sequence of the given cell color. 
    // There can be 3 different versions of this function to check for sequences of 2, 3, or 4.

    if (sequenceLength < 2 || sequenceLength > 4){
        throw new Error("Argument sequenceLength must be either 2, 3 or 4.");
    }

    for (let row = 0; row < updatedCells.length; row++) {
        for (let col = 0; col < updatedCells[row].length - (sequenceLength - 1); col++) {
            const position1 = updatedCells[row][col];
            const position2 = updatedCells[row][col + 1];

            const positions = [position1, position2];

            sequenceLength >= 3 && positions.push(updatedCells[row][col + 2]);
            sequenceLength === 4 && positions.push(updatedCells[row][col + 3]);

            const isSequence = determineIsSequence({colorToCheck, positions});

            if (isSequence) {
                return true;
            }
        }
    }
    
    return false;
};
