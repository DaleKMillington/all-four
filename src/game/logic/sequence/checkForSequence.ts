// Project
import { CellColorsType } from "../../../constants/cellColors.const";

// Local
import { checkRowsForSequence } from "./checkRowsForSequence";
import { checkColumnsForSequence } from "./checkColumnsForSequence";
import { checkDiagonalTypeOneForSequence } from "./checkDiagonalTypeOneForSequence";
import { checkDiagonalTypeTwoForSequence } from "./checkDiagonalTypeTwoForSequence"; 

// Declarations
export const checkForSequence = (
    updatedCells: CellColorsType[][],
    colorToCheck: CellColorsType,
    sequenceLength: number
): boolean => {
    // Checks rows, columns, and diagonals for any sequences of the provided cell color and length.
    
    // We are only ever going to check for sequence lengths of 2, 3 or 4.
    if (sequenceLength < 2 || sequenceLength > 4){
        throw new Error("Argument sequenceLength must be either 2, 3 or 4.");
    }

    // 1. Check rows for a sequence
    const checkRows = checkRowsForSequence(sequenceLength);
    const isRow = checkRows(updatedCells, colorToCheck);

    // 2. Check columns for a sequence
    const checkColumns = checkColumnsForSequence(sequenceLength);
    const isColumn = !isRow && checkColumns(updatedCells, colorToCheck);

    // 3. Check bottom-left to top-right diagonals for a sequence
    const checkDiagonalTypeOne = checkDiagonalTypeOneForSequence(sequenceLength);
    const isDiagonalTypeOne = !isColumn && checkDiagonalTypeOne(updatedCells, colorToCheck);

    // 4. Check top-left to bottom-right diagonals for a sequence
    const checkDiagonalTypeTwo = checkDiagonalTypeTwoForSequence(sequenceLength);
    const isDiagonalTypeTwo = !isDiagonalTypeOne && checkDiagonalTypeTwo(updatedCells, colorToCheck);

    return isRow || isColumn || isDiagonalTypeOne || isDiagonalTypeTwo;
};
