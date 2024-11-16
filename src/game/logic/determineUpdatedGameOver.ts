// Project
import { GameState } from "../state/gameState/GameState";
import { CellColorsType } from "../../constants/cellColors.const";

// Local
import { determineWin } from "./determineWin";
import { gameOver, GameOverType } from "../../constants/gameOver.const";

// Declarations
export const determineUpdatedGameOver = (state: GameState, updatedCells: CellColorsType[][]): GameOverType => {

    // 1. Has a 4-in-a-row connection been made?
    const win = determineWin(updatedCells);
    


    return gameOver.inProgress;
};
