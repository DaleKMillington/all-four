// Project
import { GameState } from "../../GameState";

// Local
import { HandleMakeMoveWithDelayType } from "./handleAIMove";
import { determineAvailableColumns } from "./determineAvailableColumns";

// Types
type DistancesType = {
    colIndex: number;
    distance: number;
};

// Declarations
const determineDistances = (availableColumns: number[]): DistancesType[] => availableColumns.map(colIndex => {
    const centerColumn = 3;
    return {
        colIndex,
        distance: Math.abs(colIndex - centerColumn)
    }
});

const determineChosenColumn = (distances: DistancesType[]): number => {
    const minDistance = Math.min(...distances.map(d => d.distance));
    
    const closestColumns = distances
        .filter(d => d.distance === minDistance)
        .map(d => d.colIndex);

    return closestColumns[Math.floor(Math.random() * closestColumns.length)];
};

export const determineClosestToCenterPosition = (
    gameState: GameState,
    handleMakeMoveWithDelay: HandleMakeMoveWithDelayType
) => {

    // 1. Find the available columns
    const availableColumns = determineAvailableColumns(gameState.cells);

    // 2. Calculate distances to the center and group equal distance columns so I can chose one at random.
    const distances = determineDistances(availableColumns);

    // 3. Chose closest column (at random if there is a tie).
    const chosenColIndex = determineChosenColumn(distances);

    handleMakeMoveWithDelay(chosenColIndex);
};
