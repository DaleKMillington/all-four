// Project
import { useGameContext } from '../../game/GameContext';
import { 
    currentPlayerColor as currentPlayerColorConst,
    CurrentPlayerColorType 
} from '../../constants/currentPlayerColor.const';
import { 
    currentPlayer,
    currentPlayer as currentPlayerConst,
    CurrentPlayerType 
} from '../../constants/currentPlayer.const';

// Local
import './statPanel.scss';

// Types
type DetermineTextType = {
    player: string,
    subText: string
}

// Declarations
const determineCurrentPlayerModifierClass = (currentPlayerColor: CurrentPlayerColorType): string => {
    switch(currentPlayerColor){
        case currentPlayerColorConst.red: return "stat-panel__current-player--red";
        case currentPlayerColorConst.yellow: return "stat-panel__current-player--yellow";
    }
};

const determineSubTextModifierClass = (currentPlayer: CurrentPlayerType): string => {
    switch(currentPlayer){
        case currentPlayerConst.ai: return "stat-panel__sub-text--ai";
        case currentPlayerConst.human: return ""  
    }
};

const determineText = (currentPlayer: CurrentPlayerType): DetermineTextType => {
    switch(currentPlayer){
        case currentPlayerConst.ai: 
            return {
                player: "AI",
                subText: "AI is thinking"
            };
        case currentPlayerConst.human: 
            return {
                player: "HUMAN",
                subText: "Its your turn!"
            };
    }
};

// Component
export const StatPanel = () => {
    const { gameState } = useGameContext();
    const { currentPlayer, currentPlayerColor } = gameState;

    const currentPlayerModifierClass = determineCurrentPlayerModifierClass(currentPlayerColor);
    const subTextModifierClass = determineSubTextModifierClass(currentPlayer);
    const { player, subText } = determineText(currentPlayer);

    return (
        <div className='stat-panel'>
            <div className={`stat-panel__current-player ${ currentPlayerModifierClass }`}>
                Current Player - { player }
            </div>
            <div className={`stat-panel__sub-text ${ subTextModifierClass }`}>
                { subText }
            </div>
        </div>
    );
};
