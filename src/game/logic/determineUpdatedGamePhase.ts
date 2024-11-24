// Project
import { CellColorsType } from "../../constants/cellColors.const";
import { gamePhase, GamePhaseType } from "../../constants/gamePhase.const";
import { checkForSequence } from "./sequence/checkForSequence";

// Local
import { determineIsBoardFull } from "./determineIsBoardFull";

// Declarations
export const determineUpdatedGamePhase = (
    updatedCells: CellColorsType[][],
    colorToCheck: CellColorsType
): GamePhaseType => {

    // 1. Has a 4-in-a-row connection been made?
    const isWin = checkForSequence(updatedCells, colorToCheck, 4);
    if (isWin){
        return gamePhase.won;
    }
    
    // 2. Is the board full?
    const isBoardFull = determineIsBoardFull(updatedCells);
    if (isBoardFull){
        return gamePhase.draw;
    }

    // 3. Else we can continue.
    return gamePhase.inProgress;
};
