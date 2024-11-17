// Project
import { cellColors, CellColorsType } from "../constants/cellColors.const";
import { currentPlayer, CurrentPlayerType } from "../constants/currentPlayer.const";
import { currentPlayerColor, CurrentPlayerColorType } from "../constants/currentPlayerColor.const";
import { gamePhase, GamePhaseType } from "../constants/gamePhase.const";
import { handleDropCell } from "./logic/handleDropCell";

// Actions
export const actions = {
    DROP_CELL: 0,
    RESET_GAME: 1,
} as const;

// Types
export type GameState = {
    cells: CellColorsType[][]; // The board state of cells
    currentPlayer: CurrentPlayerType; // Human or AI
    currentPlayerColor: CurrentPlayerColorType; // The color of the current player
    firstPlayer: boolean; // Whether this player starts the game
    playerTypes: CurrentPlayerType[]; // Is each player AI or Human 
    gamePhase: GamePhaseType;  // Has the game not started, in progress, or ended by win or draw
};

export type DropCellAction = {
    type: typeof actions.DROP_CELL;
    payload: { colIndex: number };
};

type ResetGameAction = {
    type: typeof actions.RESET_GAME;
};

export type GameAction = DropCellAction | ResetGameAction;

// Initial state (Just to be explicit will do it in full)
const emptyBoard: CellColorsType[][] = [
    [cellColors.clear, cellColors.clear, cellColors.clear, cellColors.clear, cellColors.clear, cellColors.clear, cellColors.clear],
    [cellColors.clear, cellColors.clear, cellColors.clear, cellColors.clear, cellColors.clear, cellColors.clear, cellColors.clear],
    [cellColors.clear, cellColors.clear, cellColors.clear, cellColors.clear, cellColors.clear, cellColors.clear, cellColors.clear],
    [cellColors.clear, cellColors.clear, cellColors.clear, cellColors.clear, cellColors.clear, cellColors.clear, cellColors.clear],
    [cellColors.clear, cellColors.clear, cellColors.clear, cellColors.clear, cellColors.clear, cellColors.clear, cellColors.clear],
    [cellColors.clear, cellColors.clear, cellColors.clear, cellColors.clear, cellColors.clear, cellColors.clear, cellColors.clear],
]

export const initialState = {
    cells: emptyBoard,
    currentPlayer: currentPlayer.human,
    currentPlayerColor: currentPlayerColor.red,
    firstPlayer: true,
    playerTypes: [
        currentPlayer.human,
        currentPlayer.ai
    ],
    gamePhase: gamePhase.notStarted,
};

// Reducer
export const gameReducer = (state: GameState, action: GameAction): GameState => {
    switch(action.type){
        case actions.DROP_CELL: return handleDropCell(state, action);
        case actions.RESET_GAME: return initialState;
    }
};

