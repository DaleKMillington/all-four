// Local
import './board.scss';
import { Cell } from '../cell/Cell';

// Component
export const Board = () => {
    const rows = 7;
    const columns = 7;

    const dropCells = Array.from({ length: columns });
    const cells = Array.from({ length: rows * columns });

    return (
        <div className="board">
            <div className="board__drop-zone">
                {dropCells.map((_, index) => (
                    <Cell key={index} color="blue"/>
                ))}                
            </div>
            <div className="board__game-space">
                {cells.map((_, index) => (
                    <Cell key={index} color="purple"/>
                ))}
            </div>
        </div>
    );
};