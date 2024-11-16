// Project
import { currentPlayerColor } from "../../../constants/currentPlayerColor.const";
import { cellColors } from "../../../constants/cellColors.const";
import { determineUpdatedCells } from "../../logic/determineUpdatedCells";
import { determineNextPlayer } from "../../logic/determineNextPlayer";
import { determineUpdatedGameOver } from "../../logic/determineUpdatedGameOver";
import { gameOver as gameOverConst } from "../../../constants/gameOver.const";

// Local
import { GameState, DropCellAction } from "./GameState";

// Declarations
export const handleDropCell = (state: GameState, action: DropCellAction) => {

    // 1. Get the updated cells
    const updatedCells = determineUpdatedCells(state, action);

    // 2. Has this move won OR is the board full?
    const isCurrentPlayerRed = state.currentPlayerColor === currentPlayerColor.red;
    const colorToCheck = isCurrentPlayerRed ? cellColors.red : cellColors.yellow;
    const updatedGameOver = determineUpdatedGameOver(updatedCells, colorToCheck);
    if (updatedGameOver !== gameOverConst.inProgress){
        return {
            ...state,
            cells: updatedCells,
            gameOver: updatedGameOver
        }
    }

    // 3. Get the next player
    const {
        updatedCurrentPlayer,
        updatedCurrentPlayerColor,
        updatedFirstPlayer
    } = determineNextPlayer(state);

    return {
        cells: updatedCells,
        currentPlayer: updatedCurrentPlayer,
        currentPlayerColor: updatedCurrentPlayerColor,
        firstPlayer: updatedFirstPlayer,
        gameOver: updatedGameOver
    };    
};
