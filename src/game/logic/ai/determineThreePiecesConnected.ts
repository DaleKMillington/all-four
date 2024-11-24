/*
TODO: 
This is a shameless copy and modification of determineIswin.
Refactor / redesign this to remove redundancy!
*/

// Project
import { CellColorsType } from "../../../constants/cellColors.const";
import { checkRowsForSequence } from "../sequence/checkRowsForSequence";
import { checkColumnsForSequence } from "../sequence/checkColumnsForSequence";

// Declarations
const determineHasThreePiecesConnected = (
    position1: CellColorsType,
    position2: CellColorsType,
    position3: CellColorsType,
    colorToCheck: CellColorsType
): boolean => {
    const position1Match = colorToCheck === position1;
    const position2Match = colorToCheck === position2;
    const position3Match = colorToCheck === position3;
    return position1Match && position2Match && position3Match;
};

const checkDiagonalTypeOneThreePiecesConnected = (
    updatedCells: CellColorsType[][],
    colorToCheck: CellColorsType
): boolean => {

    for (let row = 2; row < updatedCells.length; row++) {
        for (let col = 0; col < updatedCells[row].length - 2; col++) {
            const position1 = updatedCells[row][col];
            const position2 = updatedCells[row - 1][col + 1];
            const position3 = updatedCells[row - 2][col + 2];

            const isThree = determineHasThreePiecesConnected(
                position1,
                position2,
                position3,
                colorToCheck
            );

            if (isThree) {
                return true;
            }
        }
    }
    
    return false;
};

const checkDiagonalTypeTwoThreePiecesConnected = (
    updatedCells: CellColorsType[][],
    colorToCheck: CellColorsType
): boolean => {

    for (let row = 0; row < updatedCells.length - 2; row++) {
        for (let col = 0; col < updatedCells[row].length - 2; col++) {
            const position1 = updatedCells[row][col];
            const position2 = updatedCells[row + 1][col + 1];
            const position3 = updatedCells[row + 2][col + 2];

            const isThree = determineHasThreePiecesConnected(
                position1,
                position2,
                position3,
                colorToCheck
            );

            if (isThree) {
                return true;
            }
        }
    }
    
    return false;
};

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
    const isDiagonalTypeOne = !isColumn && checkDiagonalTypeOneThreePiecesConnected(
        updatedCells,
        colorToCheck
    );

    // 4. Check top-left to bottom-right diagonals for ThreePiecesConnected
    const isDiagonalTypeTwo = !isDiagonalTypeOne && checkDiagonalTypeTwoThreePiecesConnected(
        updatedCells,
        colorToCheck
    );

    return isRow || isColumn || isDiagonalTypeOne || isDiagonalTypeTwo;
};
