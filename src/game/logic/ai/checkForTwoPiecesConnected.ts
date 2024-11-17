// Project
import { GameState } from "../../GameState";
import { HandleMakeMoveWithDelayType } from "./handleAIMove";

// Local
import { determineColorToDrop } from "./determineColorToDrop";
import { determineAvailableColumns } from "./determineAvailableColumns";
import { simulateDropCell } from "./simulateDropCell";
import { determineTwoPiecesConnected } from "./determineTwoPiecesConnected";

// Declarations
export const checkForTwoPiecesConnected = (
    gameState: GameState,
    handleMakeMoveWithDelay: HandleMakeMoveWithDelayType,
    dropOpponentPiece: boolean
): boolean => {
    // 1. Determine the color to simulate dropping
    const colorToDrop = determineColorToDrop(gameState, dropOpponentPiece);

    // 2. Find the available columns
    const availableColumns = determineAvailableColumns(gameState.cells);

    // 3. Iterate over available columns and simulate making a move then check for two pieces connected.
    for (const colIndex of availableColumns) {
        const simulatedCells = simulateDropCell(gameState.cells, colIndex, colorToDrop);
        const hasTwoPiecesConnected = determineTwoPiecesConnected(simulatedCells, colorToDrop);
        if (hasTwoPiecesConnected) {
            handleMakeMoveWithDelay(colIndex);
            return true;
        }
    }

    return false;
};
