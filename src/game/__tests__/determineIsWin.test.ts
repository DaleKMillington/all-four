// Third Party
import { describe, it, expect } from 'vitest';

// Project
import { determineIsWin } from '../logic/determineIsWin';
import { cellColors } from '../../constants/cellColors.const';

// Declarations
const { clear, red, yellow } = cellColors;

// Tests
describe('determineIsWin', () => {
    it('should return false when the board is empty', () => {
        const emptyBoard = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        
        expect(determineIsWin(emptyBoard, red)).toBe(false);
        expect(determineIsWin(emptyBoard, yellow)).toBe(false);
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
        
        expect(determineIsWin(board, red)).toBe(true);
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
        
        expect(determineIsWin(board, yellow)).toBe(false);
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
        
        expect(determineIsWin(board, yellow)).toBe(true);
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
        
        expect(determineIsWin(board, red)).toBe(false);
    });

    it('should return true for red when a column contains a red win', () => {
        const board = [
            [clear, clear, red, clear, clear, clear, clear],
            [clear, clear, red, clear, clear, clear, clear],
            [clear, clear, red, clear, clear, clear, clear],
            [clear, clear, red, clear, clear, clear, clear],
            [clear, clear, red, clear, clear, clear, clear],
            [clear, clear, red, clear, clear, clear, clear],
        ];
        
        expect(determineIsWin(board, red)).toBe(true);
    });

    it('should return false for yellow when a column contains a red win', () => {
        const board = [
            [clear, clear, red, clear, clear, clear, clear],
            [clear, clear, red, clear, clear, clear, clear],
            [clear, clear, red, clear, clear, clear, clear],
            [clear, clear, red, clear, clear, clear, clear],
            [clear, clear, red, clear, clear, clear, clear],
            [clear, clear, red, clear, clear, clear, clear],
        ];
        
        expect(determineIsWin(board, yellow)).toBe(false);
    });

    it('should return true for yellow when a column contains a yellow win', () => {
        const board = [
            [clear, clear, yellow, clear, clear, clear, clear],
            [clear, clear, yellow, clear, clear, clear, clear],
            [clear, clear, yellow, clear, clear, clear, clear],
            [clear, clear, yellow, clear, clear, clear, clear],
            [clear, clear, yellow, clear, clear, clear, clear],
            [clear, clear, yellow, clear, clear, clear, clear],
        ];
        
        expect(determineIsWin(board, yellow)).toBe(true);
    });

    it('should return false for red when a column contains a yellow win', () => {
        const board = [
            [clear, clear, yellow, clear, clear, clear, clear],
            [clear, clear, yellow, clear, clear, clear, clear],
            [clear, clear, yellow, clear, clear, clear, clear],
            [clear, clear, yellow, clear, clear, clear, clear],
            [clear, clear, yellow, clear, clear, clear, clear],
            [clear, clear, yellow, clear, clear, clear, clear],
        ];
        
        expect(determineIsWin(board, red)).toBe(false);
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
        
        expect(determineIsWin(board, red)).toBe(true);
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
        
        expect(determineIsWin(board, yellow)).toBe(false);
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
        
        expect(determineIsWin(board, yellow)).toBe(true);
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
        
        expect(determineIsWin(board, red)).toBe(false);
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
        
        expect(determineIsWin(board, red)).toBe(true);
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
        
        expect(determineIsWin(board, yellow)).toBe(false);
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
        
        expect(determineIsWin(board, yellow)).toBe(true);
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
        
        expect(determineIsWin(board, red)).toBe(false);
    });
});
