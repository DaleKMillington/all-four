// Project
import { cellColors, CellColorsType } from "../../constants/cellColors.const";

// Declarations
const checkRowsForWin = (updatedCells: CellColorsType[][]): boolean => {

    for (let row = 0; row < updatedCells.length; row++) {
        for (let col = 0; col < updatedCells[row].length - 3; col++) {
            const position1 = updatedCells[row][col];
            const position2 = updatedCells[row][col + 1];
            const position3 = updatedCells[row][col + 2];
            const position4 = updatedCells[row][col + 3];

            const isNotClear = position1 !== cellColors.clear;
            const position2Match = position1 === position2;
            const position3Match = position1 === position3;
            const position4Match = position1 === position4;
            
            const hasWon = isNotClear && position2Match && position3Match && position4Match;
            
            if (hasWon) {
                return true;
            }
        }
    }
    
    return false;
};

const checkColumnsForWin = (updatedCells: CellColorsType[][]): boolean => {

    for (let col = 0; col < updatedCells[0].length; col++) {
        for (let row = 0; row < updatedCells.length - 3; row++) {
            const position1 = updatedCells[row][col];
            const position2 = updatedCells[row + 1][col];
            const position3 = updatedCells[row + 2][col];
            const position4 = updatedCells[row + 3][col];

            const isNotClear = position1 !== cellColors.clear;
            const position2Match = position1 === position2;
            const position3Match = position1 === position3;
            const position4Match = position1 === position4;
            
            const hasWon = isNotClear && position2Match && position3Match && position4Match;
            
            if (hasWon) {
                return true;
            }
        }
    }
    
    return false;
};

const checkDiagonalTypeOneWin = (updatedCells: CellColorsType[][]): boolean => {

    for (let row = 3; row < updatedCells.length; row++) {
        for (let col = 0; col < updatedCells[row].length - 3; col++) {
            const position1 = updatedCells[row][col];
            const position2 = updatedCells[row - 1][col + 1];
            const position3 = updatedCells[row - 2][col + 2];
            const position4 = updatedCells[row - 3][col + 3];
            const isNotClear = position1 !== cellColors.clear;
            const position2Match = position1 === position2;
            const position3Match = position1 === position3;
            const position4Match = position1 === position4;
            
            const hasWon = isNotClear && position2Match && position3Match && position4Match;

            if (hasWon) {
                return true;
            }
        }
    }
    
    return false;
};

const checkDiagonalTypeTwoWin = (updatedCells: CellColorsType[][]): boolean => {

    for (let row = 0; row < updatedCells.length - 3; row++) {
        for (let col = 0; col < updatedCells[row].length - 3; col++) {
            const position1 = updatedCells[row][col];
            const position2 = updatedCells[row + 1][col + 1];
            const position3 = updatedCells[row + 2][col + 2];
            const position4 = updatedCells[row + 3][col + 3];
            const isNotClear = position1 !== cellColors.clear;
            const position2Match = position1 === position2;
            const position3Match = position1 === position3;
            const position4Match = position1 === position4;
            
            const hasWon = isNotClear && position2Match && position3Match && position4Match;

            if (hasWon) {
                return true;
            }
        }
    }
    
    return false;
};

export const determineIsWin = (updatedCells: CellColorsType[][]): boolean => {
    // NOTE: I am writing these checks with the assumption that they will be triggered each move.
    // Therefore to keep the complexity down we dont have to check for the specific player color.

    // Have added && conditions to short circuit and improve performance.

    // 1. Check rows for a win
    const isRowWin = checkRowsForWin(updatedCells);

    // 2. Check columns for win
    const isColumnWin = !isRowWin && checkColumnsForWin(updatedCells);

    // 3. Check bottom-left to top-right diagonals for win
    const isDiagonalTypeOneWin = !isColumnWin && checkDiagonalTypeOneWin(updatedCells);

    // 4. Check top-left to bottom-right diagonals for win
    const isDiagonalTypeTwoWin = !isDiagonalTypeOneWin && checkDiagonalTypeTwoWin(updatedCells);

    return isRowWin || isColumnWin || isDiagonalTypeOneWin || isDiagonalTypeTwoWin;
};
