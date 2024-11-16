// Third Party
import { useEffect } from 'react';

// Project
import { Board } from '../components/board/Board';
import { currentPlayer as currentPlayerConst } from '../constants/currentPlayer.const';
import { gameOver as gameOverConst } from '../constants/gameOver.const';
import { handleAIMove } from './logic/ai/handleAIMove';

// Local
import './game.scss';
import { useGameContext } from './GameContext';

// Component
export const Game = () => {
    const { gameState, dispatch } = useGameContext();
    const { currentPlayer, gameOver } = gameState;
    
    const isAIPlayer = currentPlayer === currentPlayerConst.ai;
    const isGameInProgress = gameOver === gameOverConst.inProgress;

    useEffect(() => {
        if (isAIPlayer && isGameInProgress) {
            handleAIMove({ gameState, dispatch });
        }
    }, [isAIPlayer, isGameInProgress, gameState, dispatch]);

    return (
        <div className='game'>
            <div className="game__column">
                <Board isAIPlayer={ isAIPlayer } />
            </div>
        </div>
    );
};
