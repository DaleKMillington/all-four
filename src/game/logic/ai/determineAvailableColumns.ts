// Project
import { GameState } from "../../state/gameState/GameState";
import { cellColors } from "../../../constants/cellColors.const";

// Declarations
export const determineAvailableColumns = (gameState: GameState): number[] => {
    return gameState.cells[0]
        .map((cell, colIndex) => (cell === cellColors.clear ? colIndex : -1))
        .filter(colIndex => colIndex !== -1);
};
