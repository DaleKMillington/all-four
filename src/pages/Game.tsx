// Local
import './game.scss';
import { Board } from '../components/board/Board';
import { StatePanel } from '../components/statePanel/StatePanel';

// Component
export const Game = () => {
    return (
        <div className='game'>
            <div className="game__column">
                <Board />
            </div>
            <div className="game__column">
                <StatePanel />
            </div>
        </div>
    );
};
