// Project
import { GameState } from "../../state/gameState/GameState";
import { cellColors } from "../../../constants/cellColors.const";
import { currentPlayerColor as currentPlayerColorConst } from "../../../constants/currentPlayerColor.const";

// Declarations
export const simulateDropCell = (
    gameState: GameState,
    colIndex: number,
    dropOpponentPiece: boolean = false
) => {
    const { cells, currentPlayerColor } = gameState;

    // TODO: Have borrowed this logic from determineUpdatedCells.
    // Plus this logic is starting to look a bit grim so a refactor would be ideal time permitting.

    let rowIndex = -1;
    for (let i = cells.length - 1; i >= 0; i--) {
        if (cells[i][colIndex] === cellColors.clear) {
            rowIndex = i;
            break;
        }
    }

    const isPlayerRed = currentPlayerColor === currentPlayerColorConst.red;
    const activePlayerColor = isPlayerRed ? cellColors.red : cellColors.yellow;
    const colorToDrop = !dropOpponentPiece ? activePlayerColor : 
        activePlayerColor === cellColors.red ? cellColors.yellow : cellColors.red;

    const updatedCells = [...cells];
    updatedCells[rowIndex] = [...updatedCells[rowIndex]];
    updatedCells[rowIndex][colIndex] = colorToDrop;
    return updatedCells;
};
