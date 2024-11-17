// Project
import { GameState, DropCellAction } from "../GameState";
import { cellColors } from "../../constants/cellColors.const";
import { currentPlayerColor as currentPlayerColorConst } from "../../constants/currentPlayerColor.const";

// Declarations
export const determineUpdatedCells = (state: GameState, action: DropCellAction) => {
    const { cells, currentPlayerColor } = state;
    const { payload: { colIndex } } = action;

    let rowIndex = -1;
    for (let i = cells.length - 1; i >= 0; i--) {
        if (cells[i][colIndex] === cellColors.clear) {
            rowIndex = i;
            break;
        }
    }

    const isPlayerRed = currentPlayerColor === currentPlayerColorConst.red;
    const updatedCells = [...cells];
    updatedCells[rowIndex] = [...updatedCells[rowIndex]];
    updatedCells[rowIndex][colIndex] = isPlayerRed ? cellColors.red : cellColors.yellow;
    return updatedCells;
};
