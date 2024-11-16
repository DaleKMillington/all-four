// Project
import { cellColors, CellColorsType } from "../../../constants/cellColors.const";

// Declarations
const shuffleArray = (array: number[]): number[] => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

export const determineAvailableColumns = (cells: CellColorsType[][]): number[] => {
    const availableColumns = cells[0]
        .map((cell, colIndex) => (cell === cellColors.clear ? colIndex : -1))
        .filter(colIndex => colIndex !== -1);
    return shuffleArray(availableColumns);
};
