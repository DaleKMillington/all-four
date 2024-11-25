// Third Party
import { describe, it, expect } from 'vitest';

// Project
import { determineNextPlayer } from '../determineNextPlayer';
import { currentPlayerColor as currentPlayerColorConst } from '../../../constants/currentPlayerColor.const';
import { currentPlayer as currentPlayerConst } from '../../../constants/currentPlayer.const';
import { gamePhase as gamePhaseConst } from '../../../constants/gamePhase.const';

// Tests
describe('determineNextPlayer', () => {
    it('should switch to the second player and change color to yellow when the first player is red', () => {
        const gameState = {
            cells: [],
            currentPlayer: currentPlayerConst.human,
            currentPlayerColor: currentPlayerColorConst.red,
            firstPlayer: true,
            playerTypes: [
                currentPlayerConst.human,
                currentPlayerConst.ai
            ],
            gamePhase: gamePhaseConst.inProgress,
        };

        const result = determineNextPlayer(gameState);

        expect(result).toEqual({
            updatedCurrentPlayer: currentPlayerConst.ai,
            updatedCurrentPlayerColor: currentPlayerColorConst.yellow,
            updatedFirstPlayer: false,
        });
    });

    it('should switch back to the first player and change color to red when the second player is yellow', () => {
        const gameState = {
            cells: [],
            currentPlayer: currentPlayerConst.ai,
            currentPlayerColor: currentPlayerColorConst.yellow,
            firstPlayer: false,
            playerTypes: [
                currentPlayerConst.human,
                currentPlayerConst.ai
            ],
            gamePhase: gamePhaseConst.inProgress,
        };

        const result = determineNextPlayer(gameState);

        expect(result).toEqual({
            updatedCurrentPlayer: currentPlayerConst.human,
            updatedCurrentPlayerColor: currentPlayerColorConst.red,
            updatedFirstPlayer: true,
        });
    });

});
