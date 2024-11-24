// Project
import { CellColorsType } from "../../../constants/cellColors.const";
import { checkRowsForSequence } from "../sequence/checkRowsForSequence";
import { checkColumnsForSequence } from "../sequence/checkColumnsForSequence";
import { checkDiagonalTypeOneForSequence } from "../sequence/checkDiagonalTypeOneForSequence";
import { checkDiagonalTypeTwoForSequence } from "../sequence/checkDiagonalTypeTwoForSequence";

// Declarations
export const determineThreePiecesConnected = (
    updatedCells: CellColorsType[][],
    colorToCheck: CellColorsType
) => {
    // NOTE: Have added && conditions to short circuit and improve performance.

    // 1. Check rows for three pieces connected.
    const checkRowsForThreePiecesConnected = checkRowsForSequence(3);
    const isRow = checkRowsForThreePiecesConnected(
        updatedCells,
        colorToCheck
    );

    // 2. Check columns for three pieces connected.
    const checkColumnsForThreePiecesConnected = checkColumnsForSequence(3);
    const isColumn = !isRow && checkColumnsForThreePiecesConnected(
        updatedCells,
        colorToCheck
    );

    // 3. Check bottom-left to top-right diagonals for three pieces connected.
    const checkDiagonalTypeOneThreePiecesConnected = checkDiagonalTypeOneForSequence(3);
    const isDiagonalTypeOne = !isColumn && checkDiagonalTypeOneThreePiecesConnected(
        updatedCells,
        colorToCheck
    );

    // 4. Check top-left to bottom-right diagonals for ThreePiecesConnected
    const checkDiagonalTypeTwoThreePiecesConnected = checkDiagonalTypeTwoForSequence(3);
    const isDiagonalTypeTwo = !isDiagonalTypeOne && checkDiagonalTypeTwoThreePiecesConnected(
        updatedCells,
        colorToCheck
    );

    return isRow || isColumn || isDiagonalTypeOne || isDiagonalTypeTwo;
};
