// Local
import './settings.scss';

// Types
type PlayerRadioColorType = (typeof playerRadioColor)[keyof typeof playerRadioColor];

type PlayerRadioProps = { 
    colorType: PlayerRadioColorType,
    text: string
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
const PlayerRadio = ({ colorType, text }: PlayerRadioProps) => {
    
    const classModifier = determineClassModifier(colorType);


    return (
        <div 
            className={`player-radio player-radio${classModifier}`}
            onClick={ () => {} }
        >
            { text }
        </div>
    );
};

export const Settings = () => {

    return (
        <div className="settings settings__appear">
            <div className="settings__header">
                ALL FOUR - SETTINGS
            </div>
            <div className="settings__player settings__player--red">
                <label>PLAYER 1:</label>
                <PlayerRadio colorType={ playerRadioColor.red } text="HUMAN" />
                <PlayerRadio colorType={ playerRadioColor.red } text="AI" />
            </div>
            <div className="settings__player settings__player--yellow">
                <label>PLAYER 2:</label>
                <PlayerRadio colorType={ playerRadioColor.yellow } text="HUMAN" />
                <PlayerRadio colorType={ playerRadioColor.yellow } text="AI" />
            </div>
            <div className="settings__launch">
                LAUNCH GAME
            </div>
        </div>
    );
};
