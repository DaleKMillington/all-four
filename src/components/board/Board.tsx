// Project
import { Cell } from '../cell/Cell';
import { DropIcon } from '../dropIcon/DropIcon';
import { dropIconColors, DropIconColorsType } from '../../constants/dropIconColors.const';
import { 
    currentPlayerColor as currentPlayerColorConst,
    CurrentPlayerColorType 
} from '../../constants/currentPlayerColor.const';
import { cellColors, CellColorsType } from '../../constants/cellColors.const';
import { GameState, GameAction } from '../../game/state/gameState/GameState';

// Local
import './board.scss';

// Types
type BoardProps = {
    gameState: GameState;
    dispatch: React.Dispatch<GameAction>;
};

// Declarations
const determinePlayerDropIconColor = (currentPlayerColor: CurrentPlayerColorType): DropIconColorsType => {
    switch(currentPlayerColor){
        case currentPlayerColorConst.red: return dropIconColors.red;
        case currentPlayerColorConst.yellow: return dropIconColors.yellow;
        default: return dropIconColors.clear;
    }
};

const determineDropIconColors = (
    cells: CellColorsType[][],
    playerDropIconColor: DropIconColorsType
): DropIconColorsType[] => cells[0].map(
    column => column === cellColors.clear ? playerDropIconColor : dropIconColors.clear
);

// Component
export const Board = ({
    gameState,
    dispatch
}: BoardProps) => {

    const playerDropIconColor = determinePlayerDropIconColor(gameState.currentPlayerColor);
    const dropIconColors = determineDropIconColors(gameState.cells, playerDropIconColor);

    return (
        <div className="board">
            <div className="board__drop-zone">
                {dropIconColors.map((dropIcon, index) => (
                    <DropIcon key={index} color={dropIcon} index={index} dispatch={dispatch} />
                ))}                
            </div>
            <div className="board__game-space">
                {gameState.cells.map((row, rowIndex) => (
                    row.map((cell, colIndex) => (
                        <Cell key={`${rowIndex}-${colIndex}`} color={cell} />
                    ))
                ))}
            </div>
        </div>
    );
};
