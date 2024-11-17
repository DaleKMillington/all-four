// Project
import { GameState } from "../GameState";
import { currentPlayerColor as currentPlayerColorConst } from "../../constants/currentPlayerColor.const";

// Declarations
export const determineNextPlayer = (state: GameState) => {
    const { currentPlayerColor, firstPlayer, playerTypes } = state;

    // 1. Update current player
    // const isPlayerHuman = currentPlayer === currentPlayerConst.human;
    const updatedCurrentPlayer = firstPlayer ? playerTypes[1] : playerTypes[0];

    // 2. Update current player color
    const isPlayerRed = currentPlayerColor === currentPlayerColorConst.red;
    const updatedCurrentPlayerColor = isPlayerRed ? currentPlayerColorConst.yellow : currentPlayerColorConst.red;

    // 3. Update first player
    const updatedFirstPlayer = !firstPlayer;

    return {
        updatedCurrentPlayer,
        updatedCurrentPlayerColor,
        updatedFirstPlayer
    };
};
