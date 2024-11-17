// Project
import { GameState, LaunchGameAction } from "../GameState";
import { gamePhase } from "../../constants/gamePhase.const";

// Declarations
export const handleLaunchGame = (state: GameState, action: LaunchGameAction): GameState => {
    const { payload: { player1, player2 } } = action;
    return {
        ...state,
        currentPlayer: player1,
        playerTypes: [player1, player2],
        gamePhase: gamePhase.inProgress
    };
};
