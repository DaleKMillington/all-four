// Third Party
import { Dispatch } from 'react';

// Project
import { GameContextValueType } from "../../GameContext";
import { actions, GameAction } from '../../GameState';

// Local
import { checkForSimulatedSequence } from './checkForSimulatedSequence';
import { checkForDoubleWinSetup } from './checkForDoubleWinSetup';
import { determineClosestToCenterPosition } from "./determineClosestToCenterPosition";

// Types
export type HandleMakeMoveWithDelayType = (colIndex: number) => void;

// Declarations
const constructHandleMakeMoveWithDelay = (dispatch: Dispatch<GameAction>) => (colIndex: number) => {
    // Imitate the AI thinking otherwise the effect is just instant and looks bad.
    // Have chosen random delay times from 1 second up to 2 seconds in .5 second intervals.
    const delayTimes = [1000, 1500, 2000];
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
    // Due to time constraints this is not going to be super intelligent!

    // 1. If there is a winning move - take it! 
    // 2. If there is a move that would block a winning move - take it!
    // 3. If there is a move that gurantees two possible winning moves in the next turn - take it!
    // 4. If there is a move that blocks the other player from a guranteed 2 possible winning moves next turn - take it!
    // 5. If there is a move that gives three connected pieces - take it!
    // 6. If there is a move that blocks the other player from gettings three pieces connected - take it!
    // 7. If there is a move that gives two connected pieces - take it!
    // 8. If there is a move that blocks the other player from gettings two pieces connected - take it!    
    // 9. If none of the above are satisfied - then favour as close to the center of the board.
    
    // Higher order to bind dispatch and can be passed to each heuristic function.
    const handleMakeMoveWithDelay = constructHandleMakeMoveWithDelay(dispatch);

    // 1. If there is a winning move then take it.
    const winningMove = checkForSimulatedSequence(gameState, handleMakeMoveWithDelay, false, 4);
    if (winningMove) {
        return;
    }

    // 2. If there is a move that blocks a winning move then take it.
    const blockWinningMove = checkForSimulatedSequence(gameState, handleMakeMoveWithDelay, true, 4);
    if (blockWinningMove) {
        return;
    }

    // 3. If there is a move that gives two winning moves in the subsequent turn then take it.
    const doubleWinSetup = checkForDoubleWinSetup(gameState, handleMakeMoveWithDelay, false);
    if (doubleWinSetup) {
        return;
    }

    // 4. If there is a move that gives the opponent two winning moves in the subsequent turn then block it.
    const blockDoubleWinSetup = checkForDoubleWinSetup(gameState, handleMakeMoveWithDelay, true);
    if (blockDoubleWinSetup) {
        return;
    }

    // 5. If there is a move that allows three connected pieces then take it.
    const threeConnectedPieces = checkForSimulatedSequence(gameState, handleMakeMoveWithDelay, false, 3);
    if (threeConnectedPieces) {
        return;
    }

    // 6. If there is a move that that gives the opponent three connected pieces then block it.
    const blockThreeConnectedPieces = checkForSimulatedSequence(gameState, handleMakeMoveWithDelay, true, 3);
    if (blockThreeConnectedPieces) {
        return;
    }

    // 7. If there is a move that allows two connected pieces then take it.
    const twoConnectedPieces = checkForSimulatedSequence(gameState, handleMakeMoveWithDelay, false, 2);
    if (twoConnectedPieces) {
        return;
    }

    // 8. If there is a move that that gives the opponent two connected pieces then block it.
    const blockTwoConnectedPieces = checkForSimulatedSequence(gameState, handleMakeMoveWithDelay, true, 2);
    if (blockTwoConnectedPieces) {
        return;
    }

    // 9. Favour closest to center as possible.
    determineClosestToCenterPosition(gameState, handleMakeMoveWithDelay); 
};
