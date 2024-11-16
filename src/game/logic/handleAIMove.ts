// Project
import { GameContextValueType } from "../GameContext";
import { actions } from "../state/gameState/GameState";

// Declarations
export const handleAIMove = ({gameState, dispatch}: GameContextValueType) => {
    // Test a random move just to set up the flow.
    const randomNumber = Math.floor(Math.random() * 7);

    // Imitate the AI thinking otherwise the effect is just instant and looks bad.
    // Have chosen random delay times from 2.5 second up to 5 seconds in .5 second intervals.
    const delayTimes = [2500, 3000, 3500, 4000, 4500, 5000];
    const randomDelay = delayTimes[Math.floor(Math.random() * delayTimes.length)];    

    setTimeout(() => {
        dispatch({
            type: actions.DROP_CELL,
            payload: { colIndex: randomNumber }
        });
    }, randomDelay);
};
