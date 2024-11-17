// Project
import { GameState } from "../GameState";
import { currentPlayerColor as currentPlayerColorConst } from "../../constants/currentPlayerColor.const";
import { currentPlayer as currentPlayerConst } from "../../constants/currentPlayer.const";

// Declarations
export const determineNextPlayer = (state: GameState) => {
    const { currentPlayer, currentPlayerColor, firstPlayer } = state;
    const isPlayerHuman = currentPlayer === currentPlayerConst.human;
    const isPlayerRed = currentPlayerColor === currentPlayerColorConst.red;
    const updatedCurrentPlayer = isPlayerHuman ? currentPlayerConst.ai : currentPlayerConst.human;
    const updatedCurrentPlayerColor = isPlayerRed ? currentPlayerColorConst.yellow : currentPlayerColorConst.red;
    const updatedFirstPlayer = !firstPlayer;
    return {
        updatedCurrentPlayer,
        updatedCurrentPlayerColor,
        updatedFirstPlayer
    };
};
