// Third Party
import { useReducer } from 'react';

// Project
import { gameReducer, initialState } from "./state/gameState/GameState";

// Local
import './game.scss';
import { Board } from '../components/board/Board';

// Component
export const Game = () => {
    const [gameState, dispatch] = useReducer(gameReducer, initialState);
    return (
        <div className='game'>
            <div className="game__column">
                <Board gameState={gameState} dispatch={dispatch}/>
            </div>
        </div>
    );
};
