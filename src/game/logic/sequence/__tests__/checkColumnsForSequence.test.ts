// Third Party
import { describe, it, expect } from 'vitest';

// Project
import { checkColumnsForSequence } from '../checkColumnsForSequence';
import { cellColors } from '../../../../constants/cellColors.const';

// Declarations
const { clear, red, yellow } = cellColors;
const checkColumnsForSequenceOf2 = checkColumnsForSequence(2);
const checkColumnsForSequenceOf3 = checkColumnsForSequence(3);
const checkColumnsForSequenceOf4 = checkColumnsForSequence(4);

// Tests
describe('checkColumnsForSequence', () => {
    it('should return false when the board is empty', () => {
        const emptyBoard = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        
        expect(checkColumnsForSequenceOf2(emptyBoard, red)).toBe(false);
        expect(checkColumnsForSequenceOf2(emptyBoard, yellow)).toBe(false);
        expect(checkColumnsForSequenceOf3(emptyBoard, red)).toBe(false);
        expect(checkColumnsForSequenceOf3(emptyBoard, yellow)).toBe(false);
        expect(checkColumnsForSequenceOf4(emptyBoard, red)).toBe(false);
        expect(checkColumnsForSequenceOf4(emptyBoard, yellow)).toBe(false);
    });

    it('should return true for red when a column contains a red win', () => {
        const board = [
            [clear, clear, red, clear, clear, clear, clear],
            [clear, clear, red, clear, clear, clear, clear],
            [clear, clear, red, clear, clear, clear, clear],
            [clear, clear, red, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        
        expect(checkColumnsForSequenceOf2(board, red)).toBe(true);
        expect(checkColumnsForSequenceOf3(board, red)).toBe(true);
        expect(checkColumnsForSequenceOf4(board, red)).toBe(true);
    });

    it('should return false for yellow when a column contains a red win', () => {
        const board = [
            [clear, clear, red, clear, clear, clear, clear],
            [clear, clear, red, clear, clear, clear, clear],
            [clear, clear, red, clear, clear, clear, clear],
            [clear, clear, red, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        
        expect(checkColumnsForSequenceOf2(board, yellow)).toBe(false);
        expect(checkColumnsForSequenceOf3(board, yellow)).toBe(false);
        expect(checkColumnsForSequenceOf4(board, yellow)).toBe(false);
    });

    it('should return true for yellow when a column contains a yellow win', () => {
        const board = [
            [clear, clear, yellow, clear, clear, clear, clear],
            [clear, clear, yellow, clear, clear, clear, clear],
            [clear, clear, yellow, clear, clear, clear, clear],
            [clear, clear, yellow, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        
        expect(checkColumnsForSequenceOf2(board, yellow)).toBe(true);
        expect(checkColumnsForSequenceOf3(board, yellow)).toBe(true);
        expect(checkColumnsForSequenceOf4(board, yellow)).toBe(true);
    });

    it('should return false for red when a column contains a yellow win', () => {
        const board = [
            [clear, clear, yellow, clear, clear, clear, clear],
            [clear, clear, yellow, clear, clear, clear, clear],
            [clear, clear, yellow, clear, clear, clear, clear],
            [clear, clear, yellow, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        
        expect(checkColumnsForSequenceOf2(board, red)).toBe(false);
        expect(checkColumnsForSequenceOf3(board, red)).toBe(false);
        expect(checkColumnsForSequenceOf4(board, red)).toBe(false);
    });

});
