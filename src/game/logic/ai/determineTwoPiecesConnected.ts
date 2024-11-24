// Project
import { CellColorsType } from "../../../constants/cellColors.const";
import { checkRowsForSequence } from "../sequence/checkRowsForSequence";
import { checkColumnsForSequence } from "../sequence/checkColumnsForSequence";
import { checkDiagonalTypeOneForSequence } from "../sequence/checkDiagonalTypeOneForSequence";
import { checkDiagonalTypeTwoForSequence } from "../sequence/checkDiagonalTypeTwoForSequence";

// Declarations
export const determineTwoPiecesConnected = (
    updatedCells: CellColorsType[][],
    colorToCheck: CellColorsType
) => {
    // NOTE: Have added && conditions to short circuit and improve performance.

    // 1. Check rows for two pieces connected.
    const checkRowsForTwoPiecesConnected = checkRowsForSequence(2);
    const isRow = checkRowsForTwoPiecesConnected(
        updatedCells,
        colorToCheck
    );

    // 2. Check columns for two pieces connected.
    const checkColumnsForTwoPiecesConnected = checkColumnsForSequence(2);
    const isColumn = !isRow && checkColumnsForTwoPiecesConnected(
        updatedCells,
        colorToCheck
    );

    // 3. Check bottom-left to top-right diagonals for two pieces connected.
    const checkDiagonalTypeOneTwoPiecesConnected = checkDiagonalTypeOneForSequence(2);
    const isDiagonalTypeOne = !isColumn && checkDiagonalTypeOneTwoPiecesConnected(
        updatedCells,
        colorToCheck
    );

    // 4. Check top-left to bottom-right diagonals for two pieces connected.
    const checkDiagonalTypeTwoTwoPiecesConnected = checkDiagonalTypeTwoForSequence(2);
    const isDiagonalTypeTwo = !isDiagonalTypeOne && checkDiagonalTypeTwoTwoPiecesConnected(
        updatedCells,
        colorToCheck
    );

    return isRow || isColumn || isDiagonalTypeOne || isDiagonalTypeTwo;
};
