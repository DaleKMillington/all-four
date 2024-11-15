// Local
import './board.scss';
import { Cell } from '../cell/Cell';
import { cellColors } from '../cell/cellColors.const';
import { DropIcon } from '../dropIcon/DropIcon';
import { dropIconColors } from '../dropIcon/dropIconColors.const';

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
                    <DropIcon key={index} color={dropIconColors.yellow} />
                ))}                
            </div>
            <div className="board__game-space">
                {cells.map((_, index) => (
                    <Cell key={index} color={cellColors.red} />
                ))}
            </div>
        </div>
    );
};