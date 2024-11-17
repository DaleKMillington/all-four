// Third Party
import { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react';
import { gameReducer, initialState, GameState, GameAction } from './GameState';

// Types
export type GameContextValueType = {
    gameState: GameState;
    dispatch: Dispatch<GameAction>;
}

type GameProviderProps = {
    children: ReactNode;    
}

// Context
const GameContext = createContext<GameContextValueType | undefined>(undefined);

// Hook
export const useGameContext = () => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error('useGameContext must be used within a GameProvider');
    }
    return context;
};

// Provider
export const GameProvider = ({ children }: GameProviderProps) => {
    const [gameState, dispatch] = useReducer(gameReducer, initialState);
    return (
        <GameContext.Provider value={{ gameState, dispatch }}>
            {children}
        </GameContext.Provider>
    );
};
