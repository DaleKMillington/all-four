// Third Party
import { describe, it, expect } from 'vitest';

// Project
import { checkDiagonalTypeTwoForSequence } from '../checkDiagonalTypeTwoForSequence';
import { cellColors } from '../../../../constants/cellColors.const';

// Declarations
const { clear, red, yellow } = cellColors;
const checkDiagonalTypeTwoForSequenceOf2 = checkDiagonalTypeTwoForSequence(2);
const checkDiagonalTypeTwoForSequenceOf3 = checkDiagonalTypeTwoForSequence(3);
const checkDiagonalTypeTwoForSequenceOf4 = checkDiagonalTypeTwoForSequence(4);

// Tests
describe('checkDiagonalTypeTwoForSequence', () => {
    it('should return false when the board is empty', () => {
        const emptyBoard = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        
        expect(checkDiagonalTypeTwoForSequenceOf2(emptyBoard, red)).toBe(false);
        expect(checkDiagonalTypeTwoForSequenceOf2(emptyBoard, yellow)).toBe(false);
        expect(checkDiagonalTypeTwoForSequenceOf3(emptyBoard, red)).toBe(false);
        expect(checkDiagonalTypeTwoForSequenceOf3(emptyBoard, yellow)).toBe(false);
        expect(checkDiagonalTypeTwoForSequenceOf4(emptyBoard, red)).toBe(false);
        expect(checkDiagonalTypeTwoForSequenceOf4(emptyBoard, yellow)).toBe(false);
    });

    it('should return true for red when a diagaonal type two contains a red win', () => {
        const board = [
            [clear, clear, clear, red, clear, clear, clear],
            [clear, clear, clear, clear, red, clear, clear],
            [clear, clear, clear, clear, clear, red, clear],
            [clear, clear, clear, clear, clear, clear, red],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        
        expect(checkDiagonalTypeTwoForSequenceOf2(board, red)).toBe(true);
        expect(checkDiagonalTypeTwoForSequenceOf3(board, red)).toBe(true);
        expect(checkDiagonalTypeTwoForSequenceOf4(board, red)).toBe(true);
    });

    it('should return false for yellow when a diagaonal type two contains a red win', () => {
        const board = [
            [clear, clear, clear, red, clear, clear, clear],
            [clear, clear, clear, clear, red, clear, clear],
            [clear, clear, clear, clear, clear, red, clear],
            [clear, clear, clear, clear, clear, clear, red],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        
        expect(checkDiagonalTypeTwoForSequenceOf2(board, yellow)).toBe(false);
        expect(checkDiagonalTypeTwoForSequenceOf3(board, yellow)).toBe(false);
        expect(checkDiagonalTypeTwoForSequenceOf4(board, yellow)).toBe(false);
    });

    it('should return true for yellow when a diagaonal type two contains a yellow win', () => {
        const board = [
            [clear, clear, clear, yellow, clear, clear, clear],
            [clear, clear, clear, clear, yellow, clear, clear],
            [clear, clear, clear, clear, clear, yellow, clear],
            [clear, clear, clear, clear, clear, clear, yellow],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        
        expect(checkDiagonalTypeTwoForSequenceOf2(board, yellow)).toBe(true);
        expect(checkDiagonalTypeTwoForSequenceOf3(board, yellow)).toBe(true);
        expect(checkDiagonalTypeTwoForSequenceOf4(board, yellow)).toBe(true);
    });

    it('should return false for red when a diagaonal type two contains a yellow win', () => {
        const board = [
            [clear, clear, clear, yellow, clear, clear, clear],
            [clear, clear, clear, clear, yellow, clear, clear],
            [clear, clear, clear, clear, clear, yellow, clear],
            [clear, clear, clear, clear, clear, clear, yellow],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        
        expect(checkDiagonalTypeTwoForSequenceOf2(board, red)).toBe(false);
        expect(checkDiagonalTypeTwoForSequenceOf3(board, red)).toBe(false);
        expect(checkDiagonalTypeTwoForSequenceOf4(board, red)).toBe(false);
    });

});
