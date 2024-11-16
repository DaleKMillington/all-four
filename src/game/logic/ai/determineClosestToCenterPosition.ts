// Project
import { GameState } from "../../state/gameState/GameState";
import { cellColors } from "../../../constants/cellColors.const";

// Local
import { HandleMakeMoveWithDelayType } from "./handleAIMove";

// Types
type DistancesType = {
    colIndex: number;
    distance: number;
};

// Declarations
const determineAvailableColumns = (gameState: GameState): number[] => {
    return gameState.cells[0]
        .map((cell, colIndex) => (cell === cellColors.clear ? colIndex : -1))
        .filter(colIndex => colIndex !== -1);
};

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
    const availableColumns = determineAvailableColumns(gameState);

    // 2. Calculate distances to the center and group equal distance columns so I can chose one at random.
    const distances = determineDistances(availableColumns);

    // 3. Chose closest column (at random if there is a tie).
    const chosenColIndex = determineChosenColumn(distances);

    handleMakeMoveWithDelay(chosenColIndex);
};
