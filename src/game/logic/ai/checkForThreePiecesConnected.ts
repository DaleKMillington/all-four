// Project
import { GameState } from "../../GameState";
import { HandleMakeMoveWithDelayType } from "./handleAIMove";

// Local
import { determineColorToDrop } from "./determineColorToDrop";
import { determineAvailableColumns } from "./determineAvailableColumns";
import { simulateDropCell } from "./simulateDropCell";
import { determineThreePiecesConnected } from "./determineThreePiecesConnected";

// Declarations
export const checkForThreePiecesConnected = (
    gameState: GameState,
    handleMakeMoveWithDelay: HandleMakeMoveWithDelayType,
    dropOpponentPiece: boolean
): boolean => {
    // 1. Determine the color to simulate dropping
    const colorToDrop = determineColorToDrop(gameState, dropOpponentPiece);

    // 2. Find the available columns
    const availableColumns = determineAvailableColumns(gameState.cells);

    // 3. Iterate over available columns and simulate making a move then check for three pieces connected.
    for (const colIndex of availableColumns) {
        const simulatedCells = simulateDropCell(gameState.cells, colIndex, colorToDrop);
        const hasThreePiecesConnected = determineThreePiecesConnected(simulatedCells, colorToDrop);
        if (hasThreePiecesConnected) {
            handleMakeMoveWithDelay(colIndex);
            return true;
        }
    }

    return false;
};
