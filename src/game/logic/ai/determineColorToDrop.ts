// Project
import { GameState } from "../../GameState";
import { cellColors } from "../../../constants/cellColors.const";
import { currentPlayerColor as currentPlayerColorConst } from "../../../constants/currentPlayerColor.const";

// Declarations
export const determineColorToDrop = (
    gameState: GameState,
    dropOpponentPiece: boolean
) => {
    const { currentPlayerColor } = gameState;

    const isPlayerRed = currentPlayerColor === currentPlayerColorConst.red;
    const activePlayerColor = isPlayerRed ? cellColors.red : cellColors.yellow;
    
    const colorToDrop = !dropOpponentPiece ? activePlayerColor : 
        activePlayerColor === cellColors.red ? cellColors.yellow : cellColors.red;
    
    return colorToDrop;
};
