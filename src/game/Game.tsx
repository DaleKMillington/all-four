// Third Party
import { useEffect } from 'react';

// Project
import { Board } from '../components/board/Board';
import { currentPlayer as currentPlayerConst } from '../constants/currentPlayer.const';
import { handleAIMove } from './logic/handleAIMove';

// Local
import './game.scss';
import { useGameContext } from './GameContext';

// Component
export const Game = () => {
    const { gameState, dispatch } = useGameContext();
    const { currentPlayer } = gameState;
    const isAIPlayer = currentPlayer === currentPlayerConst.ai;
    
    useEffect(() => {
        if (isAIPlayer) {
            handleAIMove({ gameState, dispatch });
        }
    }, [isAIPlayer, gameState, dispatch]);

    return (
        <div className='game'>
            <div className="game__column">
                <Board isAIPlayer={ isAIPlayer } />
            </div>
        </div>
    );
};
