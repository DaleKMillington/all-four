// Project
import { CellColorsType } from "../../../constants/cellColors.const";

// Type
type DetermineIsSequenceType = {
    colorToCheck: CellColorsType;
    positions: CellColorsType[];
};

// Declaration
export const determineIsSequence = ({
    colorToCheck,
    positions,
}: DetermineIsSequenceType): boolean => {
    return positions.every(position => colorToCheck === position);
};
