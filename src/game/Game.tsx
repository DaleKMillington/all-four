// Local
import './game.scss';
import { Board } from '../components/board/Board';

// Component
export const Game = () => {
    return (
        <div className='game'>
            <div className="game__column">
                <Board />
            </div>
        </div>
    );
};
