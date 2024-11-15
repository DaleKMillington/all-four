// Local
import './dropIcon.scss';
import { dropIconColors, DropIconColorsType } from '../../constants/dropIconColors.const';

// Types
type DropIconProps = {
    color: DropIconColorsType;
}   

// Declarations
const animatedModifierClass = "drop-icon--animated";

const determineDropIconModifierClass = (color: DropIconColorsType): string => {
    switch(color){
        case dropIconColors.clear: return "drop-icon--clear";
        case dropIconColors.red: return "drop-icon--red";
        case dropIconColors.yellow: return "drop-icon--yellow";
    }
};

// Component
export const DropIcon = ({ color }: DropIconProps) => {
    const dropIconModifierClass = determineDropIconModifierClass(color);
    return (
        <div className={`drop-icon ${dropIconModifierClass}`}>

        </div>
    );
};