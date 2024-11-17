// Third Party
import { useState } from 'react';

// Project
import { actions } from '../../game/GameState';
import { useGameContext } from '../../game/GameContext';
import { currentPlayer } from '../../constants/currentPlayer.const';

// Local
import './settings.scss';

// Types
type PlayerRadioColorType = (typeof playerRadioColor)[keyof typeof playerRadioColor];

type PlayerRadioProps = { 
    colorType: PlayerRadioColorType;
    text: string;
    active: boolean;
    onClick: () => void;
};

// Declarations
const playerRadioColor = {
    red: "RED",
    yellow: "YELLOW"
} as const;

const determineClassModifier = (type: PlayerRadioColorType): string => {
    switch(type){
        case playerRadioColor.red: return "--red";
        case playerRadioColor.yellow: return "--yellow";
    }
};

// Components
const PlayerRadio = ({ colorType, text, active, onClick }: PlayerRadioProps) => {
    
    const classModifier = determineClassModifier(colorType);
    const activeClass = active ? "player-radio--active" : "player-radio--not-active";

    return (
        <div 
            className={`player-radio player-radio${classModifier} ${activeClass}`}
            onClick={ onClick }
        >
            { text }
        </div>
    );
};

export const Settings = () => {

    const { gameState, dispatch } = useGameContext();
    const { playerTypes } = gameState;

    const [ playerOneType, setPlayerOneType ] = useState(playerTypes[0]);
    const [ playerTwoType, setPlayerTwoType ] = useState(playerTypes[1]);

    const launchGameOnClick = () => {
        dispatch({
            type: actions.LAUNCH_GAME,
            payload: {
                player1: playerOneType,
                player2: playerTwoType
            }
        })
    };

    return (
        <div className="settings settings__appear">
            <div className="settings__header">
                ALL FOUR - SETTINGS
            </div>
            <div className="settings__player settings__player--red">
                <label>PLAYER 1:</label>
                <PlayerRadio 
                    colorType={ playerRadioColor.red } 
                    text="HUMAN"
                    active={ playerOneType === currentPlayer.human }
                    onClick={ () => setPlayerOneType(currentPlayer.human) }
                />
                <PlayerRadio 
                    colorType={ playerRadioColor.red } 
                    text="AI"
                    active={ playerOneType === currentPlayer.ai }
                    onClick={ () => setPlayerOneType(currentPlayer.ai) }
                />
            </div>
            <div className="settings__player settings__player--yellow">
                <label>PLAYER 2:</label>
                <PlayerRadio 
                    colorType={ playerRadioColor.yellow } 
                    text="HUMAN"
                    active={ playerTwoType === currentPlayer.human }
                    onClick={ () => setPlayerTwoType(currentPlayer.human) }
                />
                <PlayerRadio 
                    colorType={ playerRadioColor.yellow } 
                    text="AI"
                    active={ playerTwoType === currentPlayer.ai }
                    onClick={ () => setPlayerTwoType(currentPlayer.ai) }
                />
            </div>
            <div className="settings__launch" onClick={ launchGameOnClick }>
                LAUNCH GAME
            </div>
        </div>
    );
};
