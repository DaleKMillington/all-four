// Project
import { GameState } from "../../state/gameState/GameState";

// Local
import { HandleMakeMoveWithDelayType } from "./handleAIMove";
import { determineAvailableColumns } from "./determineAvailableColumns";
import { simulateDropCell } from "./simulateDropCell";
import { determineColorToDrop } from "./determineColorToDrop";
import { determineHasTwoWinningMoves } from "./determineHasTwoWinningMoves";

// Declarations
export const checkForDoubleWinSetup = (
    gameState: GameState,
    handleMakeMoveWithDelay: HandleMakeMoveWithDelayType,
    dropOpponentPiece: boolean
): boolean => {

    // 1. Determine the color to simulate dropping
    const colorToDrop = determineColorToDrop(gameState, dropOpponentPiece);

    // 2. Find the available columns
    const availableColumns = determineAvailableColumns(gameState.cells);

    // 3. Iterate over available columns and simulate making a move then check for a double win setup.
    for (const colIndex of availableColumns) {
        const simulatedCells = simulateDropCell(gameState.cells, colIndex, colorToDrop);
        const hasTwoWinningMoves = determineHasTwoWinningMoves(simulatedCells, colorToDrop);
        if (hasTwoWinningMoves) {
            handleMakeMoveWithDelay(colIndex);
            return true; // Block this setup
        }
    }

    return false;
};
