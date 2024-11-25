// Third Party
import { describe, it, expect } from 'vitest';

// Project
import { determineUpdatedGamePhase } from '../determineUpdatedGamePhase';
import { cellColors } from '../../../constants/cellColors.const';
import { gamePhase } from '../../../constants/gamePhase.const';

// Declarations
const { clear, red, yellow } = cellColors;

// Tests
describe('determineUpdatedGamePhase', () => {

    it('should continue as in progress when the game is not over and checking for the "red" player', () => {
        const emptyBoard = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        const updatedGamePhase = determineUpdatedGamePhase(emptyBoard, red);
        expect(updatedGamePhase).toBe(gamePhase.inProgress);
    });

    it('should continue as in progress when the game is not over and checking for the "yellow" player', () => {
        const emptyBoard = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        const updatedGamePhase = determineUpdatedGamePhase(emptyBoard, yellow);
        expect(updatedGamePhase).toBe(gamePhase.inProgress);
    });

    it('should change to won when the game is won by the "red" player', () => {
        const emptyBoard = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, red, red, red, red, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        const updatedGamePhase = determineUpdatedGamePhase(emptyBoard, red);
        expect(updatedGamePhase).toBe(gamePhase.won);
    });

    it('should change to won when the game is won by the "yellow" player', () => {
        const emptyBoard = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, yellow, yellow, yellow, yellow, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
        ];
        const updatedGamePhase = determineUpdatedGamePhase(emptyBoard, yellow);
        expect(updatedGamePhase).toBe(gamePhase.won);
    });

    it('should change to draw when the game board is full and neither player has won', () => {
        const emptyBoard = [
            [red, yellow, red, yellow, red, yellow, red],
            [red, yellow, red, yellow, red, yellow, red],
            [yellow, red, yellow, red, yellow, red, yellow],
            [yellow, red, yellow, red, yellow, red, yellow],
            [red, yellow, red, yellow, red, yellow, red],
            [red, yellow, red, yellow, red, yellow, red],
        ];
        const updatedGamePhase = determineUpdatedGamePhase(emptyBoard, red);
        expect(updatedGamePhase).toBe(gamePhase.draw);
    });

});
