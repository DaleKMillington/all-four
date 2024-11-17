// Third Party
import { describe, it, expect } from 'vitest';

// Project
import { determineIsBoardFull } from '../logic/determineIsBoardFull';
import { cellColors } from '../../constants/cellColors.const';

// Declarations
const { clear, red, yellow } = cellColors;

// Tests
describe('determineIsBoardFull', () => {
    it('should return false when the top row has any "clear" cells', () => {
        const emptyBoard = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        
        expect(determineIsBoardFull(emptyBoard)).toBe(false);
    });

    it('should return true when the top row has no "clear" cells', () => {
        const boardFullTopRow = [
            [red, yellow, red, yellow, red, yellow, red],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];

        expect(determineIsBoardFull(boardFullTopRow)).toBe(true);
    });

    it('should return false when the top row has a mix of "clear" and other colors', () => {
        const mixedTopRowBoard = [
            [clear, red, yellow, clear, red, yellow, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];

        expect(determineIsBoardFull(mixedTopRowBoard)).toBe(false);
    });

    it('should return true for a completely full board (no "clear" cells anywhere)', () => {
        const fullBoard = [
            [red, yellow, red, yellow, red, yellow, red],
            [yellow, red, yellow, red, yellow, red, yellow],
            [red, yellow, red, yellow, red, yellow, red],
            [yellow, red, yellow, red, yellow, red, yellow],
            [red, yellow, red, yellow, red, yellow, red],
            [yellow, red, yellow, red, yellow, red, yellow],
        ];

        expect(determineIsBoardFull(fullBoard)).toBe(true);
    });
});
