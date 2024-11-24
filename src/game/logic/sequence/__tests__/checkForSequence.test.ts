// Third Party
import { describe, it, expect } from 'vitest';

// Project
import { checkForSequence } from '../checkForSequence';
import { cellColors } from '../../../../constants/cellColors.const';

// Declarations
const { clear, red } = cellColors;

// Tests
describe('checkForSequence', () => {

    it('should throw an error if sequenceLength is less than 2', () => {
        const emptyBoard = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        expect(() => checkForSequence(emptyBoard, red, 1))
            .toThrowError("Argument sequenceLength must be either 2, 3 or 4.");
    });

    it('should throw an error if sequenceLength is greater than 4', () => {
        const emptyBoard = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        expect(() => checkForSequence(emptyBoard, red, 1))
            .toThrowError("Argument sequenceLength must be either 2, 3 or 4.");
    });

    it('should return false when there is no sequence', () => {
        const emptyBoard = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];     
        expect(checkForSequence(emptyBoard, red, 4)).toBe(false);    
    });

    it('should return true when there is a row sequence', () => {
        const redRowWinBoard = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, red, red, red, red],
        ];
        expect(checkForSequence(redRowWinBoard, red, 4)).toBe(true);
    });

    it('should return true when there is a column sequence', () => {
        const redColumnWinBoard = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, red],
            [clear, clear, clear, clear, clear, clear, red],
            [clear, clear, clear, clear, clear, clear, red],
            [clear, clear, clear, clear, clear, clear, red],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        expect(checkForSequence(redColumnWinBoard, red, 4)).toBe(true);
    });

    it('should return true when there is a diagonal type one sequence', () => {
        const redDiagonalTypeOneWinBoard = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, red],
            [clear, clear, clear, clear, clear, red, clear],
            [clear, clear, clear, clear, red, clear, clear],
            [clear, clear, clear, red, clear, clear, clear],
        ];
        expect(checkForSequence(redDiagonalTypeOneWinBoard, red, 4)).toBe(true);
    });

    it('should return true when there is a diagonal type two sequence', () => {
        const redDiagonalTypeTwoWinBoard = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [red, clear, clear, clear, clear, clear, clear],
            [clear, red, clear, clear, clear, clear, clear],
            [clear, clear, red, clear, clear, clear, clear],
            [clear, clear, clear, red, clear, clear, clear],
        ];
        expect(checkForSequence(redDiagonalTypeTwoWinBoard, red, 4)).toBe(true);
    });

    // NOTE: No need to test further due to already being tested in:
    // - checkRowsForSequence.test.ts
    // - checkColumnsForSequence.test.ts
    // - checkDiagonalTypeOneForSequence.test.ts
    // - checkDiagonalTypeTwoForSequence.test.ts

});
