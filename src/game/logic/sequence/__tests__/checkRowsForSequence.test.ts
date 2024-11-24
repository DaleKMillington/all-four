// Third Party
import { describe, it, expect } from 'vitest';

// Project
import { checkRowsForSequence } from '../checkRowsForSequence';
import { cellColors } from '../../../../constants/cellColors.const';

// Declarations
const { clear, red, yellow } = cellColors;
const checkRowsForSequenceOf2 = checkRowsForSequence(2);
const checkRowsForSequenceOf3 = checkRowsForSequence(3);
const checkRowsForSequenceOf4 = checkRowsForSequence(4);

// Tests
describe('checkRowsForSequence', () => {
    it('should return false when the board is empty', () => {
        const emptyBoard = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        
        expect(checkRowsForSequenceOf2(emptyBoard, red)).toBe(false);
        expect(checkRowsForSequenceOf2(emptyBoard, yellow)).toBe(false);
        expect(checkRowsForSequenceOf3(emptyBoard, red)).toBe(false);
        expect(checkRowsForSequenceOf3(emptyBoard, yellow)).toBe(false);
        expect(checkRowsForSequenceOf4(emptyBoard, red)).toBe(false);
        expect(checkRowsForSequenceOf4(emptyBoard, yellow)).toBe(false);
    });

    it('should return true for red when a row contains a red win', () => {
        const board = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, red, red, red, red, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        
        expect(checkRowsForSequenceOf2(board, red)).toBe(true);
        expect(checkRowsForSequenceOf3(board, red)).toBe(true);
        expect(checkRowsForSequenceOf4(board, red)).toBe(true);
    });

    it('should return false for yellow when a row contains a red win', () => {
        const board = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, red, red, red, red, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        
        expect(checkRowsForSequenceOf2(board, yellow)).toBe(false);
        expect(checkRowsForSequenceOf3(board, yellow)).toBe(false);
        expect(checkRowsForSequenceOf4(board, yellow)).toBe(false);
    });

    it('should return true for yellow when a row contains a yellow win', () => {
        const board = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, yellow, yellow, yellow, yellow, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        
        expect(checkRowsForSequenceOf2(board, yellow)).toBe(true);
        expect(checkRowsForSequenceOf3(board, yellow)).toBe(true);
        expect(checkRowsForSequenceOf4(board, yellow)).toBe(true);
    });

    it('should return false for red when a row contains a yellow win', () => {
        const board = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, yellow, yellow, yellow, yellow, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        
        expect(checkRowsForSequenceOf2(board, red)).toBe(false);
        expect(checkRowsForSequenceOf3(board, yellow)).toBe(true);
        expect(checkRowsForSequenceOf4(board, yellow)).toBe(true);
    });

});
