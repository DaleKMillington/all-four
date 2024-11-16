// Project
import { cellColors, CellColorsType } from "../../../constants/cellColors.const";

// Declarations
export const simulateDropCell = (
    cells: CellColorsType[][],
    colIndex: number,
    colorToDrop: CellColorsType
) => {
    // TODO: Have borrowed this logic from determineUpdatedCells.
    // Plus this logic is starting to look a bit grim so a refactor would be ideal time permitting.

    let rowIndex = -1;
    for (let i = cells.length - 1; i >= 0; i--) {
        if (cells[i][colIndex] === cellColors.clear) {
            rowIndex = i;
            break;
        }
    }
    
    const updatedCells = [...cells];
    updatedCells[rowIndex] = [...updatedCells[rowIndex]];
    updatedCells[rowIndex][colIndex] = colorToDrop;
    return updatedCells;
};
