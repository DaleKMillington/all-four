// Third Party
import { useEffect } from 'react';

// Project
import { Board } from '../components/board/Board';
import { currentPlayer as currentPlayerConst } from '../constants/currentPlayer.const';
import { gamePhase as gamePhaseConst } from '../constants/gamePhase.const';
import { handleAIMove } from './logic/ai/handleAIMove';

// Local
import './game.scss';
import { useGameContext } from './GameContext';

// Component
export const Game = () => {
    const { gameState, dispatch } = useGameContext();
    const { currentPlayer, gamePhase } = gameState;
    
    const isAIPlayer = currentPlayer === currentPlayerConst.ai;
    const isGameInProgress = gamePhase === gamePhaseConst.inProgress;

    useEffect(() => {
        if (isAIPlayer && isGameInProgress) {
            handleAIMove({ gameState, dispatch });
        }
    }, [isAIPlayer, isGameInProgress, gameState, dispatch]);

    return (
        <div className='game'>
            <div className="game__column">
                <Board isAIPlayer={ isAIPlayer } isGameInProgress={ isGameInProgress } />
            </div>
        </div>
    );
};
