// Project
import { CellColorsType } from "../../constants/cellColors.const";

// Declarations
const determineHasWon = (
    position1: CellColorsType,
    position2: CellColorsType,
    position3: CellColorsType,
    position4: CellColorsType,
    colorToCheck: CellColorsType
): boolean => {
    const position1Match = colorToCheck === position1;
    const position2Match = colorToCheck === position2;
    const position3Match = colorToCheck === position3;
    const position4Match = colorToCheck === position4;
    return position1Match && position2Match && position3Match && position4Match;
};

const checkRowsForWin = (
    updatedCells: CellColorsType[][],
    colorToCheck: CellColorsType
): boolean => {

    for (let row = 0; row < updatedCells.length; row++) {
        for (let col = 0; col < updatedCells[row].length - 3; col++) {
            const position1 = updatedCells[row][col];
            const position2 = updatedCells[row][col + 1];
            const position3 = updatedCells[row][col + 2];
            const position4 = updatedCells[row][col + 3];

            const hasWon = determineHasWon(
                position1,
                position2,
                position3,
                position4,
                colorToCheck
            );

            if (hasWon) {
                return true;
            }
        }
    }
    
    return false;
};

const checkColumnsForWin = (
    updatedCells: CellColorsType[][],
    colorToCheck: CellColorsType
): boolean => {

    for (let col = 0; col < updatedCells[0].length; col++) {
        for (let row = 0; row < updatedCells.length - 3; row++) {
            const position1 = updatedCells[row][col];
            const position2 = updatedCells[row + 1][col];
            const position3 = updatedCells[row + 2][col];
            const position4 = updatedCells[row + 3][col];

            const hasWon = determineHasWon(
                position1,
                position2,
                position3,
                position4,
                colorToCheck
            );

            if (hasWon) {
                return true;
            }
        }
    }
    
    return false;
};

const checkDiagonalTypeOneWin = (
    updatedCells: CellColorsType[][],
    colorToCheck: CellColorsType
): boolean => {

    for (let row = 3; row < updatedCells.length; row++) {
        for (let col = 0; col < updatedCells[row].length - 3; col++) {
            const position1 = updatedCells[row][col];
            const position2 = updatedCells[row - 1][col + 1];
            const position3 = updatedCells[row - 2][col + 2];
            const position4 = updatedCells[row - 3][col + 3];

            const hasWon = determineHasWon(
                position1,
                position2,
                position3,
                position4,
                colorToCheck
            );

            if (hasWon) {
                return true;
            }
        }
    }
    
    return false;
};

const checkDiagonalTypeTwoWin = (
    updatedCells: CellColorsType[][],
    colorToCheck: CellColorsType
): boolean => {

    for (let row = 0; row < updatedCells.length - 3; row++) {
        for (let col = 0; col < updatedCells[row].length - 3; col++) {
            const position1 = updatedCells[row][col];
            const position2 = updatedCells[row + 1][col + 1];
            const position3 = updatedCells[row + 2][col + 2];
            const position4 = updatedCells[row + 3][col + 3];

            const hasWon = determineHasWon(
                position1,
                position2,
                position3,
                position4,
                colorToCheck
            );

            if (hasWon) {
                return true;
            }
        }
    }
    
    return false;
};

export const determineIsWin = (
    updatedCells: CellColorsType[][],
    colorToCheck: CellColorsType
): boolean => {
    // NOTE: Have added && conditions to short circuit and improve performance.

    // 1. Check rows for a win
    const isRowWin = checkRowsForWin(updatedCells, colorToCheck);

    // 2. Check columns for win
    const isColumnWin = !isRowWin && checkColumnsForWin(updatedCells, colorToCheck);

    // 3. Check bottom-left to top-right diagonals for win
    const isDiagonalTypeOneWin = !isColumnWin && checkDiagonalTypeOneWin(updatedCells, colorToCheck);

    // 4. Check top-left to bottom-right diagonals for win
    const isDiagonalTypeTwoWin = !isDiagonalTypeOneWin && checkDiagonalTypeTwoWin(updatedCells, colorToCheck);

    return isRowWin || isColumnWin || isDiagonalTypeOneWin || isDiagonalTypeTwoWin;
};
