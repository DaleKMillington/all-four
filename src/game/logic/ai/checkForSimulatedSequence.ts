// Project
import { GameState } from "../../GameState";
import { checkForSequence } from "../sequence/checkForSequence";

// Local
import { HandleMakeMoveWithDelayType } from "./handleAIMove";
import { determineAvailableColumns } from "./determineAvailableColumns";
import { simulateDropCell } from "./simulateDropCell";
import { determineColorToDrop } from "./determineColorToDrop";

// Declarations
export const checkForSimulatedSequence = (
    gameState: GameState,
    handleMakeMoveWithDelay: HandleMakeMoveWithDelayType,
    dropOpponentPiece: boolean,
    sequenceLength: number
): boolean => {

    // 1. Determine the color to simulate dropping
    const colorToDrop = determineColorToDrop(gameState, dropOpponentPiece);

    // 2. Find the available columns
    const availableColumns = determineAvailableColumns(gameState.cells);

    // 3. Iterate over available columns and simulate making a move then check for a win.
    for (const colIndex of availableColumns) {
        const simulatedCells = simulateDropCell(gameState.cells, colIndex, colorToDrop);
        const isSimulationASequnce = checkForSequence(simulatedCells, colorToDrop, sequenceLength);
        if (isSimulationASequnce) {
            handleMakeMoveWithDelay(colIndex);
            return true;
        }
    }   

    return false;
};
