// Project
import { CellColorsType } from "../../../constants/cellColors.const";

// Local
import { determineAvailableColumns } from "./determineAvailableColumns";
import { simulateDropCell } from "./simulateDropCell";
import { determineIsWin } from "../determineIsWin";

// Declarations
export const determineHasTwoWinningMoves = (
    simulatedCells: CellColorsType[][],
    colorToDrop: CellColorsType
): boolean => {

    // 1. Find the available columns
    const availableColumns = determineAvailableColumns(simulatedCells);

    // 2. Now check one move ahead again and simulate to see if any moves lead to a win condition.
    // If two or winning moves are detected then we know this move can lead to a win on the subsequent turn.
    let winningMovesCount = 0;
    for (const colIndex of availableColumns) {
        const updatedSimulatedCells = simulateDropCell(simulatedCells, colIndex, colorToDrop);
        const isSimulationAWin = determineIsWin(updatedSimulatedCells, colorToDrop);

        if (isSimulationAWin) {
            winningMovesCount++;
        }

        if (winningMovesCount >= 2) {
            return true;
        }
    }

    return false;
};
