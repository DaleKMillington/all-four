// Project
import { useGameContext } from '../../game/GameContext';
import { 
    currentPlayerColor as currentPlayerColorConst,
    CurrentPlayerColorType 
} from '../../constants/currentPlayerColor.const';
import { 
    currentPlayer as currentPlayerConst,
    CurrentPlayerType 
} from '../../constants/currentPlayer.const';
import { gameOver as gameOverConst } from '../../constants/gameOver.const';

// Local
import './statPanel.scss';

// Types
type DetermineTextType = {
    player: string,
    subText: string
}

// Declarations
const determineColorModifierClass = (currentPlayerColor: CurrentPlayerColorType): string => {
    switch(currentPlayerColor){
        case currentPlayerColorConst.red: return "--red";
        case currentPlayerColorConst.yellow: return "--yellow";
    }
};

const determineSubTextModifierClass = (currentPlayer: CurrentPlayerType): string => {
    switch(currentPlayer){
        case currentPlayerConst.ai: return "in-progress__sub-text--ai";
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

const determineGameWonText = (currentPlayer: CurrentPlayerType): string => {
    switch(currentPlayer){
        case currentPlayerConst.ai: return "AI Wins!";
        case currentPlayerConst.human: return "HUMAN Wins!";
    }
};

// Components
const GameInProgress = () => {
    const { gameState } = useGameContext();
    const { currentPlayer, currentPlayerColor } = gameState;

    const colorModifierClass = determineColorModifierClass(currentPlayerColor);
    const subTextModifierClass = determineSubTextModifierClass(currentPlayer);
    const { player, subText } = determineText(currentPlayer);

    return (
        <>
            <div className={`in-progress__current-player in-progress__current-player${ colorModifierClass }`}>
                Current Player - { player }
            </div>
            <div className={`in-progress__sub-text ${ subTextModifierClass }`}>
                { subText }
            </div>
        </>
    )
};

const GameWon = () => {
    const { gameState } = useGameContext();
    const { currentPlayer, currentPlayerColor } = gameState;

    const colorModifierClass = determineColorModifierClass(currentPlayerColor);
    const gameWonText = determineGameWonText(currentPlayer);

    return (
        <div className={`game-won game-won${colorModifierClass}`}>
            { gameWonText }
        </div>
    );
};

const GameDraw = () => {
    return (
        <div className='game-draw'>
            The game has ended in a draw!
        </div>
    );
};

export const StatPanel = () => {
    const { gameState } = useGameContext();
    const { gameOver } = gameState;

    const isGameInProgress = gameOver === gameOverConst.inProgress;
    const isGameWon = gameOver === gameOverConst.won;
    const isGameDraw = gameOver === gameOverConst.draw;

    return (
        <div className='stat-panel'>
            { isGameInProgress && <GameInProgress /> }
            { isGameWon && <GameWon /> }

        </div>
    );
};
