// Project
import { GameState } from "../../state/gameState/GameState";
import { determineIsWin } from "../determineIsWin";

// Local
import { HandleMakeMoveWithDelayType } from "./handleAIMove";
import { determineAvailableColumns } from "./determineAvailableColumns";
import { simulateDropCell } from "./simulateDropCell";

// Declarations
export const checkForWinningMove = (
    gameState: GameState,
    handleMakeMoveWithDelay: HandleMakeMoveWithDelayType
): boolean => {

    // 1. Find the available columns
    const availableColumns = determineAvailableColumns(gameState);

    // 2. Iterate over available columns and simulate making a move.
    // Then I can check whether any move results in a win by reusing logic from handleDropCell action flow.
    for (const colIndex of availableColumns) {
        const simulatedCells = simulateDropCell(gameState, colIndex);
        const isSimulationAWin = determineIsWin(simulatedCells);
        if (isSimulationAWin) {
            handleMakeMoveWithDelay(colIndex);
            return true;
        }
    }   

    return false;
};
