// Local
import './board.scss';
import { Cell } from '../cell/Cell';
import { cellColors } from '../../constants/cellColors.const';
import { DropIcon } from '../dropIcon/DropIcon';
import { dropIconColors } from '../../constants/dropIconColors.const';
import { GameState, GameAction } from '../../state/gameState/GameState';

// Types
type BoardProps = {
    gameState: GameState;
    dispatch: React.Dispatch<GameAction>;
};

// Component
export const Board = ({
    gameState: {
        cells
    },
    dispatch
}: BoardProps) => {
    const columns = 7;
    const dropCells = Array.from({ length: columns });

    console.log({cells});

    return (
        <div className="board">
            <div className="board__drop-zone">
                {dropCells.map((_, index) => (
                    <DropIcon key={index} color={dropIconColors.yellow} />
                ))}                
            </div>
            <div className="board__game-space">
                {cells.map((row, rowIndex) => (
                    row.map((cell, colIndex) => (
                        <Cell key={`${rowIndex}-${colIndex}`} color={cell} />
                    ))
                ))}
            </div>
        </div>
    );
};