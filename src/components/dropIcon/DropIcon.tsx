// Project
import { actions } from '../../game/state/gameState/GameState';
import { dropIconColors, DropIconColorsType } from '../../constants/dropIconColors.const';
import { useGameContext } from '../../game/GameContext';

// Local
import './dropIcon.scss';

// Types
type DropIconProps = {
    color: DropIconColorsType;
    index: number;
}   

// Declarations
const determineDropIconModifierClass = (color: DropIconColorsType): string => {
    switch(color){
        case dropIconColors.clear: return "drop-icon--clear";
        case dropIconColors.red: return "drop-icon--red";
        case dropIconColors.yellow: return "drop-icon--yellow";
    }
};

// Component
export const DropIcon = ({ color, index }: DropIconProps) => {
    const { dispatch } = useGameContext();

    const dropIconModifierClass = determineDropIconModifierClass(color);
    const onclickHandler = () => {
        if (color !== dropIconColors.clear) {
            dispatch({
                type: actions.DROP_CELL,
                payload: {colIndex: index}
            });
        }
    };

    return (
        <div 
            className={`drop-icon ${dropIconModifierClass}`}
            onClick={ onclickHandler }
        >

        </div>
    );
};