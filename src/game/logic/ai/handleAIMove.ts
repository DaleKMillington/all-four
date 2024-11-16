// Third Party
import { Dispatch } from 'react';

// Project
import { GameContextValueType } from "../../GameContext";
import { actions, GameAction } from "../../state/gameState/GameState";

// Local
import { checkForWinningMove } from './checkForWinningMove';
import { determineClosestToCenterPosition } from "./determineClosestToCenterPosition";

// Types
export type HandleMakeMoveWithDelayType = (colIndex: number) => void;

// Declarations
const constructHandleMakeMoveWithDelay = (dispatch: Dispatch<GameAction>) => (colIndex: number) => {
    // Imitate the AI thinking otherwise the effect is just instant and looks bad.
    // Have chosen random delay times from 2.5 second up to 5 seconds in .5 second intervals.
    const delayTimes = [2500, 3000, 3500];
    const randomDelay = delayTimes[Math.floor(Math.random() * delayTimes.length)];    

    setTimeout(() => {
        dispatch({
            type: actions.DROP_CELL,
            payload: { colIndex }
        });
    }, randomDelay);
};

export const handleAIMove = ({gameState, dispatch}: GameContextValueType) => {
    // I am going to design this AI to follow a set of heuristics based on priority.
    // Due to time constraints this is not going to be super intelligent.
    // 1. If there is a winning move - take it! 
    // 2. If there is a move that would block a winning move - take it!
    // 3. If there is a move that gurantees 2 possible winning moves in the next turn - take it!
    // 4. If there is a move that blocks the other player from a guranteed 2 possible winning moves next turn - take it!
    // 5. If there is a move that gives 3 connected pieces - take it!
    // 6. If there is a move that gives 2 connected pieces - take it!
    // 7. If none of the above are satisfied - then favour as close to the center of the board.
    
    // Higher order to bind dispatch and can be passed to each heuristic function.
    const handleMakeMoveWithDelay = constructHandleMakeMoveWithDelay(dispatch);

    // 1. If there is a winning move then take it.
    const winningMove = checkForWinningMove(gameState, handleMakeMoveWithDelay, false);
    if (winningMove) {
        return;
    }

    // 2. If there is a move that blocks a winning move then take it.
    const blockWinningMove = checkForWinningMove(gameState, handleMakeMoveWithDelay, true);
    if (blockWinningMove) {
        return;
    }

    // 7. Favour closest to center as possible.
    determineClosestToCenterPosition(gameState, handleMakeMoveWithDelay); 
};
