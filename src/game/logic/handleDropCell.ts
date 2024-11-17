// Project
import { currentPlayerColor } from "../../constants/currentPlayerColor.const";
import { cellColors } from "../../constants/cellColors.const";
import { determineUpdatedCells } from "./determineUpdatedCells";
import { determineNextPlayer } from "./determineNextPlayer";
import { determineUpdatedGamePhase } from "./determineUpdatedGamePhase";
import { gamePhase as gamePhaseConst } from "../../constants/gamePhase.const";

// Local
import { GameState, DropCellAction } from "../GameState";

// Declarations
export const handleDropCell = (state: GameState, action: DropCellAction) => {

    // 1. Get the updated cells
    const updatedCells = determineUpdatedCells(state, action);

    // 2. Has this move won OR is the board full?
    const isCurrentPlayerRed = state.currentPlayerColor === currentPlayerColor.red;
    const colorToCheck = isCurrentPlayerRed ? cellColors.red : cellColors.yellow;
    const updatedGamePhase = determineUpdatedGamePhase(updatedCells, colorToCheck);
    if (updatedGamePhase !== gamePhaseConst.inProgress){
        return {
            ...state,
            cells: updatedCells,
            gamePhase: updatedGamePhase
        }
    }

    // 3. Get the next player
    const {
        updatedCurrentPlayer,
        updatedCurrentPlayerColor,
        updatedFirstPlayer
    } = determineNextPlayer(state);

    return {
        ...state,
        cells: updatedCells,
        currentPlayer: updatedCurrentPlayer,
        currentPlayerColor: updatedCurrentPlayerColor,
        firstPlayer: updatedFirstPlayer,
        gamePhase: updatedGamePhase
    };    
};
