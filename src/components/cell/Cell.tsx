// Local
import './cell.scss';
import { cellColors, CellColorsType } from './cellColors.const';

// Types
type CellProps = {
    color: CellColorsType;
}   

// Declarations
const determineCellModifierClass = (color: CellColorsType): string => {
    switch(color){
        case cellColors.red: return "cell--red";
        case cellColors.yellow: return "cell--yellow";
        case cellColors.clear: return "cell--clear";
    }
};

// Component
export const Cell = ({ color }: CellProps) => {
    const cellModifierClass = determineCellModifierClass(color);
    return (
        <div className={`cell ${cellModifierClass}`}>

        </div>
    );
};
