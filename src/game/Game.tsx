// Local
import './game.scss';
import { Board } from '../components/board/Board';
import { GameProvider } from './GameContext';

// Component
export const Game = () => {
    return (
        <GameProvider>
            <div className='game'>
                <div className="game__column">
                    <Board />
                </div>
            </div>
        </GameProvider>
    );
};
