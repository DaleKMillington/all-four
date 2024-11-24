// Project
import { CellColorsType } from "../../constants/cellColors.const";
import { checkRowsForSequence } from "./sequence/checkRowsForSequence";
import { checkColumnsForSequence } from "./sequence/checkColumnsForSequence";
import { checkDiagonalTypeOneForSequence } from "./sequence/checkDiagonalTypeOneForSequence";
import { checkDiagonalTypeTwoForSequence } from "./sequence/checkDiagonalTypeTwoForSequence"; 

// Declarations
export const determineIsWin = (
    updatedCells: CellColorsType[][],
    colorToCheck: CellColorsType
): boolean => {
    // NOTE: Have added && conditions to short circuit and improve performance.

    // 1. Check rows for a win
    const checkRowsForWin = checkRowsForSequence(4);
    const isRowWin = checkRowsForWin(updatedCells, colorToCheck);

    // 2. Check columns for win
    const checkColumnsForWin = checkColumnsForSequence(4);
    const isColumnWin = !isRowWin && checkColumnsForWin(updatedCells, colorToCheck);

    // 3. Check bottom-left to top-right diagonals for win
    const checkDiagonalTypeOneWin = checkDiagonalTypeOneForSequence(4);
    const isDiagonalTypeOneWin = !isColumnWin && checkDiagonalTypeOneWin(updatedCells, colorToCheck);

    // 4. Check top-left to bottom-right diagonals for win
    const checkDiagonalTypeTwoWin = checkDiagonalTypeTwoForSequence(4);
    const isDiagonalTypeTwoWin = !isDiagonalTypeOneWin && checkDiagonalTypeTwoWin(updatedCells, colorToCheck);

    return isRowWin || isColumnWin || isDiagonalTypeOneWin || isDiagonalTypeTwoWin;
};
