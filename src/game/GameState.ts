// Project
import { cellColors, CellColorsType } from "../constants/cellColors.const";
import { currentPlayer, CurrentPlayerType } from "../constants/currentPlayer.const";
import { currentPlayerColor, CurrentPlayerColorType } from "../constants/currentPlayerColor.const";
import { gamePhase, GamePhaseType } from "../constants/gamePhase.const";
import { handleDropCell } from "./logic/handleDropCell";
import { handleLaunchGame } from "./logic/handleLaunchGame";

// Actions
export const actions = {
    LAUNCH_GAME: 0, // Lanuches the game from the settings modal
    DROP_CELL: 1, // Handle the droppoing of a piece either by human or ai
    RESET_GAME: 2, // Reset the game to its initial state. Used to restart.
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

export type LaunchGameAction = {
    type: typeof actions.LAUNCH_GAME;
    payload: {
        player1: CurrentPlayerType,
        player2: CurrentPlayerType 
    };
};

export type DropCellAction = {
    type: typeof actions.DROP_CELL;
    payload: { colIndex: number };
};

type ResetGameAction = {
    type: typeof actions.RESET_GAME;
};

export type GameAction = LaunchGameAction | DropCellAction | ResetGameAction;

// Initial state (Just to be explicit will do it in full)
const { clear } = cellColors;
const emptyBoard: CellColorsType[][] = [
    [clear, clear, clear, clear, clear, clear, clear],
    [clear, clear, clear, clear, clear, clear, clear],
    [clear, clear, clear, clear, clear, clear, clear],
    [clear, clear, clear, clear, clear, clear, clear],
    [clear, clear, clear, clear, clear, clear, clear],
    [clear, clear, clear, clear, clear, clear, clear],
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
        case actions.LAUNCH_GAME: return handleLaunchGame(state, action);
        case actions.DROP_CELL: return handleDropCell(state, action);
        case actions.RESET_GAME: return initialState;
    }
};

