// Project
import { cellColors, CellColorsType } from "../../../constants/cellColors.const";

// Declarations
export const determineAvailableColumns = (cells: CellColorsType[][]): number[] => {
    return cells[0]
        .map((cell, colIndex) => (cell === cellColors.clear ? colIndex : -1))
        .filter(colIndex => colIndex !== -1);
};
