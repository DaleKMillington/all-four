// Project
import { GameState } from "../../state/gameState/GameState";

// Local
import { HandleMakeMoveWithDelayType } from "./handleAIMove";
import { determineAvailableColumns } from "./determineAvailableColumns";
import { simulateDropCell } from "./simulateDropCell";

// Declarations
export const checkForDoubleWinSetup = (
    gameState: GameState,
    handleMakeMoveWithDelay: HandleMakeMoveWithDelayType,
    dropOpponentPiece: boolean
): boolean => {

    // 1. Find the available columns
    const availableColumns = determineAvailableColumns(gameState);

    // 2. Determine the color to simulate
    const opponentColor = gameState.currentPlayer === cellColors.red ? cellColors.yellow : cellColors.red;

    
    for (const colIndex of availableColumns) {
        const simulatedGameState = simulateDropCell(gameState, colIndex, dropOpponentPiece);

        if (hasTwoWinningMoves(simulatedGameState, opponentColor)) {
            handleMakeMoveWithDelay(colIndex);
            return true; // Block this setup
        }
    }

    return false;
};
