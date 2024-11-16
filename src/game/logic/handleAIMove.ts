// Project
import { GameContextValueType } from "../GameContext";
import { actions } from "../state/gameState/GameState";

// Declarations
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

    // THIS IS JUST A PLACEHOLDER AND WILL BE REMOVED!
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
