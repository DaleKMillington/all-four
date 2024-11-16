// Project
import { cellColors, CellColorsType } from "../../constants/cellColors.const";

// Declarations
export const determineIsBoardFull = (updatedCells: CellColorsType[][]) => {
    // To check whether the board is full it is safe to assume I only have to check that
    // the top row contains no clear cells.
    const topRow = updatedCells[0];
    return topRow.every(cell => cell !== cellColors.clear);
};
