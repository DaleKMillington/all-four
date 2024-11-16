// Project
import { GameState } from "../state/gameState/GameState";
import { CellColorsType } from "../../constants/cellColors.const";
import { gameOver, GameOverType } from "../../constants/gameOver.const";

// Local
import { determineIsWin } from "./determineIsWin";
import { determineIsBoardFull } from "./determineIsBoardFull";

// Declarations
export const determineUpdatedGameOver = (
    updatedCells: CellColorsType[][],
    colorToCheck: CellColorsType
): GameOverType => {

    // 1. Has a 4-in-a-row connection been made?
    const isWin = determineIsWin(updatedCells, colorToCheck);
    if (isWin){
        return gameOver.won;
    }
    
    // 2. Is the board full?
    const isBoardFull = determineIsBoardFull(updatedCells);
    if (isBoardFull){
        return gameOver.draw;
    }

    // 3. Else we can continue.
    return gameOver.inProgress;
};
