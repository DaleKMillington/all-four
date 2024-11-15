// Project
import { cellColors } from "../../constants/cellColors.const";
import { currentPlayer as currentPlayerConst } from "../../constants/currentPlayer.const";
import { currentPlayerColor as currentPlayerColorConst } from "../../constants/currentPlayerColor.const";

// Local
import { GameState, DropCellAction } from "./GameState";

// Declarations
export const handleDropCell = (state: GameState, action: DropCellAction) => {
    const { cells, currentPlayer, currentPlayerColor, gameOver } = state;
    const { payload: { colIndex } } = action;

    let rowIndex = -1;
    for (let i = cells.length - 1; i >= 0; i--) {
        if (cells[i][colIndex] === cellColors.clear) {
            rowIndex = i;
            break;
        }
    }

    const updatedCells = [...cells];
    updatedCells[rowIndex] = [...updatedCells[rowIndex]];
    updatedCells[rowIndex][colIndex] = currentPlayerColor === currentPlayerColorConst.red ? cellColors.red : cellColors.yellow;
    
    const updatedCurrentPlayer = currentPlayer === currentPlayerConst.human ?
        currentPlayerConst.ai : currentPlayerConst.human;
    
    const updatedCurrentPlayerColor = currentPlayerColor === currentPlayerColorConst.red ?
        currentPlayerColorConst.yellow : currentPlayerColorConst.red;
    
    // TODO: This is just temporary will come back to this.
    const updatedGameOver = gameOver;

    return {
        cells: updatedCells,
        currentPlayer: updatedCurrentPlayer,
        currentPlayerColor: updatedCurrentPlayerColor,
        gameOver: updatedGameOver
    };    
};
