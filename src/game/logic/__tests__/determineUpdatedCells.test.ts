// Third Party
import { describe, it, expect } from 'vitest';

// Project
import { determineUpdatedCells } from '../determineUpdatedCells';
import { cellColors, CellColorsType } from '../../../constants/cellColors.const';
import { currentPlayer } from '../../../constants/currentPlayer.const';
import { currentPlayerColor } from '../../../constants/currentPlayerColor.const';
import { gamePhase } from '../../../constants/gamePhase.const';
import { actions } from '../../GameState';

// Declarations
const { clear, red, yellow } = cellColors;

const emptyBoard: CellColorsType[][] = [
    [clear, clear, clear, clear, clear, clear, clear],
    [clear, clear, clear, clear, clear, clear, clear],
    [clear, clear, clear, clear, clear, clear, clear],
    [clear, clear, clear, clear, clear, clear, clear],
    [clear, clear, clear, clear, clear, clear, clear],
    [clear, clear, clear, clear, clear, clear, clear],
];

const gameStateRedPlayerTurn = {
    cells: emptyBoard,
    currentPlayer: currentPlayer.human,
    currentPlayerColor: currentPlayerColor.red,
    firstPlayer: true,
    playerTypes: [
        currentPlayer.human,
        currentPlayer.ai
    ],
    gamePhase: gamePhase.inProgress,
};

const gameStateYellowPlayerTurn = {
    cells: emptyBoard,
    currentPlayer: currentPlayer.human,
    currentPlayerColor: currentPlayerColor.yellow,
    firstPlayer: true,
    playerTypes: [
        currentPlayer.human,
        currentPlayer.ai
    ],
    gamePhase: gamePhase.inProgress,
};

// Tests
describe('determineUpdatedCells', () => {

    it('should populate first column with "red" when played in first column and the "red" players turn', () => {

        const dropCellAction = {
            type: actions.DROP_CELL,
            payload: {
                colIndex: 0
            }
        };

        const updatedCells = determineUpdatedCells(gameStateRedPlayerTurn, dropCellAction);

        const expectedUpdatedCells = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [red, clear, clear, clear, clear, clear, clear],
        ];
        
        expect(updatedCells).toEqual(expectedUpdatedCells);
    });

    it('should populate second column with "red" when played in second column and the "red" players turn', () => {

        const dropCellAction = {
            type: actions.DROP_CELL,
            payload: {
                colIndex: 1
            }
        };

        const updatedCells = determineUpdatedCells(gameStateRedPlayerTurn, dropCellAction);

        const expectedUpdatedCells = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, red, clear, clear, clear, clear, clear],
        ];
        
        expect(updatedCells).toEqual(expectedUpdatedCells);
    });

    it('should populate third column with "red" when played in third column and the "red" players turn', () => {

        const dropCellAction = {
            type: actions.DROP_CELL,
            payload: {
                colIndex: 2
            }
        };

        const updatedCells = determineUpdatedCells(gameStateRedPlayerTurn, dropCellAction);

        const expectedUpdatedCells = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, red, clear, clear, clear, clear],
        ];
        
        expect(updatedCells).toEqual(expectedUpdatedCells);
    });

    it('should populate fourth column with "red" when played in fourth column and the "red" players turn', () => {

        const dropCellAction = {
            type: actions.DROP_CELL,
            payload: {
                colIndex: 3
            }
        };

        const updatedCells = determineUpdatedCells(gameStateRedPlayerTurn, dropCellAction);

        const expectedUpdatedCells = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, red, clear, clear, clear],
        ];
        
        expect(updatedCells).toEqual(expectedUpdatedCells);
    });

    it('should populate fifth column with "red" when played in fifth column and the "red" players turn', () => {

        const dropCellAction = {
            type: actions.DROP_CELL,
            payload: {
                colIndex: 4
            }
        };

        const updatedCells = determineUpdatedCells(gameStateRedPlayerTurn, dropCellAction);

        const expectedUpdatedCells = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, red, clear, clear],
        ];
        
        expect(updatedCells).toEqual(expectedUpdatedCells);
    });

    it('should populate sixth column with "red" when played in sixth column and the "red" players turn', () => {

        const dropCellAction = {
            type: actions.DROP_CELL,
            payload: {
                colIndex: 5
            }
        };

        const updatedCells = determineUpdatedCells(gameStateRedPlayerTurn, dropCellAction);

        const expectedUpdatedCells = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, red, clear],
        ];
        
        expect(updatedCells).toEqual(expectedUpdatedCells);
    });

    it('should populate seventh column with "red" when played in seventh column and the "red" players turn', () => {

        const dropCellAction = {
            type: actions.DROP_CELL,
            payload: {
                colIndex: 6
            }
        };

        const updatedCells = determineUpdatedCells(gameStateRedPlayerTurn, dropCellAction);

        const expectedUpdatedCells = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, red],
        ];
        
        expect(updatedCells).toEqual(expectedUpdatedCells);
    });

    it('should populate first column with "yellow" when played in first column and the "yellow" players turn', () => {

        const dropCellAction = {
            type: actions.DROP_CELL,
            payload: {
                colIndex: 0
            }
        };

        const updatedCells = determineUpdatedCells(gameStateYellowPlayerTurn, dropCellAction);

        const expectedUpdatedCells = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [yellow, clear, clear, clear, clear, clear, clear],
        ];
        
        expect(updatedCells).toEqual(expectedUpdatedCells);
    });

    it('should populate second column with "yellow" when played in second column and the "yellow" players turn', () => {

        const dropCellAction = {
            type: actions.DROP_CELL,
            payload: {
                colIndex: 1
            }
        };

        const updatedCells = determineUpdatedCells(gameStateYellowPlayerTurn, dropCellAction);

        const expectedUpdatedCells = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, yellow, clear, clear, clear, clear, clear],
        ];
        
        expect(updatedCells).toEqual(expectedUpdatedCells);
    });

    it('should populate third column with "yellow" when played in third column and the "yellow" players turn', () => {

        const dropCellAction = {
            type: actions.DROP_CELL,
            payload: {
                colIndex: 2
            }
        };

        const updatedCells = determineUpdatedCells(gameStateYellowPlayerTurn, dropCellAction);

        const expectedUpdatedCells = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, yellow, clear, clear, clear, clear],
        ];
        
        expect(updatedCells).toEqual(expectedUpdatedCells);
    });

    it('should populate fourth column with "yellow" when played in fourth column and the "yellow" players turn', () => {

        const dropCellAction = {
            type: actions.DROP_CELL,
            payload: {
                colIndex: 3
            }
        };

        const updatedCells = determineUpdatedCells(gameStateYellowPlayerTurn, dropCellAction);

        const expectedUpdatedCells = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, yellow, clear, clear, clear],
        ];
        
        expect(updatedCells).toEqual(expectedUpdatedCells);
    });

    it('should populate fifth column with "yellow" when played in fifth column and the "yellow" players turn', () => {

        const dropCellAction = {
            type: actions.DROP_CELL,
            payload: {
                colIndex: 4
            }
        };

        const updatedCells = determineUpdatedCells(gameStateYellowPlayerTurn, dropCellAction);

        const expectedUpdatedCells = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, yellow, clear, clear],
        ];
        
        expect(updatedCells).toEqual(expectedUpdatedCells);
    });

    it('should populate sixth column with "yellow" when played in sixth column and the "yellow" players turn', () => {

        const dropCellAction = {
            type: actions.DROP_CELL,
            payload: {
                colIndex: 5
            }
        };

        const updatedCells = determineUpdatedCells(gameStateYellowPlayerTurn, dropCellAction);

        const expectedUpdatedCells = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, yellow, clear],
        ];
        
        expect(updatedCells).toEqual(expectedUpdatedCells);
    });

    it('should populate seventh column with "yellow" when played in seventh column and the "yellow" players turn', () => {

        const dropCellAction = {
            type: actions.DROP_CELL,
            payload: {
                colIndex: 6
            }
        };

        const updatedCells = determineUpdatedCells(gameStateYellowPlayerTurn, dropCellAction);

        const expectedUpdatedCells = [
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, clear],
            [clear, clear, clear, clear, clear, clear, yellow],
        ];
        
        expect(updatedCells).toEqual(expectedUpdatedCells);
    });

});
