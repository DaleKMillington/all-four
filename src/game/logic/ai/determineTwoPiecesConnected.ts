/*
TODO: 
This is a shameless copy and modification of determineIswin.
Refactor / redesign this to remove redundancy!
*/

// Project
import { CellColorsType } from "../../../constants/cellColors.const";
import { checkRowsForSequence } from "../sequence/checkRowsForSequence";

// Declarations
const determineHasTwoPiecesConnected = (
    position1: CellColorsType,
    position2: CellColorsType,
    colorToCheck: CellColorsType
): boolean => {
    const position1Match = colorToCheck === position1;
    const position2Match = colorToCheck === position2;
    return position1Match && position2Match;
};

const checkColumnsForTwoPiecesConnected = (
    updatedCells: CellColorsType[][],
    colorToCheck: CellColorsType
): boolean => {

    for (let col = 0; col < updatedCells[0].length; col++) {
        for (let row = 0; row < updatedCells.length - 1; row++) {
            const position1 = updatedCells[row][col];
            const position2 = updatedCells[row + 1][col];

            const isTwo = determineHasTwoPiecesConnected(
                position1,
                position2,
                colorToCheck
            );

            if (isTwo) {
                return true;
            }
        }
    }
    
    return false;
};

const checkDiagonalTypeOneTwoPiecesConnected = (
    updatedCells: CellColorsType[][],
    colorToCheck: CellColorsType
): boolean => {

    for (let row = 1; row < updatedCells.length; row++) {
        for (let col = 0; col < updatedCells[row].length - 1; col++) {
            const position1 = updatedCells[row][col];
            const position2 = updatedCells[row - 1][col + 1];

            const isTwo = determineHasTwoPiecesConnected(
                position1,
                position2,
                colorToCheck
            );

            if (isTwo) {
                return true;
            }
        }
    }
    
    return false;
};

const checkDiagonalTypeTwoTwoPiecesConnected = (
    updatedCells: CellColorsType[][],
    colorToCheck: CellColorsType
): boolean => {

    for (let row = 0; row < updatedCells.length - 1; row++) {
        for (let col = 0; col < updatedCells[row].length - 1; col++) {
            const position1 = updatedCells[row][col];
            const position2 = updatedCells[row + 1][col + 1];

            const isTwo = determineHasTwoPiecesConnected(
                position1,
                position2,
                colorToCheck
            );

            if (isTwo) {
                return true;
            }
        }
    }
    
    return false;
};

export const determineTwoPiecesConnected = (
    updatedCells: CellColorsType[][],
    colorToCheck: CellColorsType
) => {
    // NOTE: Have added && conditions to short circuit and improve performance.

    // 1. Check rows for two pieces connected.
    const checkRowsForTwoPiecesConnected = checkRowsForSequence(2);
    const isRowTwoPiecesConnected = checkRowsForTwoPiecesConnected(
        updatedCells,
        colorToCheck
    );

    // 2. Check columns for two pieces connected.
    const isColumnTwoPiecesConnected = !isRowTwoPiecesConnected && checkColumnsForTwoPiecesConnected(
        updatedCells,
        colorToCheck
    );

    // 3. Check bottom-left to top-right diagonals for two pieces connected.
    const isDiagonalTypeOneTwoPiecesConnected = !isColumnTwoPiecesConnected && checkDiagonalTypeOneTwoPiecesConnected(
        updatedCells,
        colorToCheck
    );

    // 4. Check top-left to bottom-right diagonals for two pieces connected.
    const isDiagonalTypeTwoTwoPiecesConnected = !isDiagonalTypeOneTwoPiecesConnected && checkDiagonalTypeTwoTwoPiecesConnected(
        updatedCells,
        colorToCheck
    );

    return isRowTwoPiecesConnected || isColumnTwoPiecesConnected || isDiagonalTypeOneTwoPiecesConnected || isDiagonalTypeTwoTwoPiecesConnected;
};
