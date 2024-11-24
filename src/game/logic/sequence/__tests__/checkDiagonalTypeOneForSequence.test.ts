// Third Party
import { describe, it, expect } from 'vitest';

// Project
import { checkDiagonalTypeOneForSequence } from '../checkDiagonalTypeOneForSequence';
import { cellColors } from '../../../../constants/cellColors.const';

// Declarations
const { clear, red, yellow } = cellColors;
const checkDiagonalTypeOneForSequenceOf2 = checkDiagonalTypeOneForSequence(2);
const checkDiagonalTypeOneForSequenceOf3 = checkDiagonalTypeOneForSequence(3);
const checkDiagonalTypeOneForSequenceOf4 = checkDiagonalTypeOneForSequence(4);

// Tests
describe('checkDiagonalTypeOneForSequence', () => {
    it('should return false when the board is empty', () => {
        const emptyBoard = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        
        expect(checkDiagonalTypeOneForSequenceOf2(emptyBoard, red)).toBe(false);
        expect(checkDiagonalTypeOneForSequenceOf2(emptyBoard, yellow)).toBe(false);
        expect(checkDiagonalTypeOneForSequenceOf3(emptyBoard, red)).toBe(false);
        expect(checkDiagonalTypeOneForSequenceOf3(emptyBoard, yellow)).toBe(false);
        expect(checkDiagonalTypeOneForSequenceOf4(emptyBoard, red)).toBe(false);
        expect(checkDiagonalTypeOneForSequenceOf4(emptyBoard, yellow)).toBe(false);
    });

    it('should return true for red when a diagaonal type one contains a red win', () => {
        const board = [
            [clear, clear, clear, red, clear, clear, clear],
            [clear, clear, red, clear, clear, clear, clear],
            [clear, red, clear, clear, clear, clear, clear],
            [red, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        
        expect(checkDiagonalTypeOneForSequenceOf2(board, red)).toBe(true);
        expect(checkDiagonalTypeOneForSequenceOf3(board, red)).toBe(true);
        expect(checkDiagonalTypeOneForSequenceOf4(board, red)).toBe(true);
    });

    it('should return false for yellow when a diagaonal type one contains a red win', () => {
        const board = [
            [clear, clear, clear, red, clear, clear, clear],
            [clear, clear, red, clear, clear, clear, clear],
            [clear, red, clear, clear, clear, clear, clear],
            [red, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        
        expect(checkDiagonalTypeOneForSequenceOf2(board, yellow)).toBe(false);
        expect(checkDiagonalTypeOneForSequenceOf3(board, yellow)).toBe(false);
        expect(checkDiagonalTypeOneForSequenceOf4(board, yellow)).toBe(false);
    });

    it('should return true for yellow when a diagaonal type one contains a yellow win', () => {
        const board = [
            [clear, clear, clear, yellow, clear, clear, clear],
            [clear, clear, yellow, clear, clear, clear, clear],
            [clear, yellow, clear, clear, clear, clear, clear],
            [yellow, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        
        expect(checkDiagonalTypeOneForSequenceOf2(board, yellow)).toBe(true);
        expect(checkDiagonalTypeOneForSequenceOf3(board, yellow)).toBe(true);
        expect(checkDiagonalTypeOneForSequenceOf4(board, yellow)).toBe(true);
    });

    it('should return false for red when a diagaonal type one contains a yellow win', () => {
        const board = [
            [clear, clear, clear, yellow, clear, clear, clear],
            [clear, clear, yellow, clear, clear, clear, clear],
            [clear, yellow, clear, clear, clear, clear, clear],
            [yellow, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        
        expect(checkDiagonalTypeOneForSequenceOf2(board, red)).toBe(false);
        expect(checkDiagonalTypeOneForSequenceOf3(board, red)).toBe(false);
        expect(checkDiagonalTypeOneForSequenceOf4(board, red)).toBe(false);
    });

});
