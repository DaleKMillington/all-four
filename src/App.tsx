// Project
import { StatPanel } from "./components/statPanel/StatPanel";
import { Game } from "./game/Game";
import { gamePhase as gamePhaseConst } from "./constants/gamePhase.const";
import { useGameContext } from "./game/GameContext";
import { Fade } from "./components/fade/Fade";
import { Settings } from "./components/settings/Settings";
import { useIsTouchDevice } from "./hooks/useIsTouchDevice";
import { NotSupported } from "./components/notSupported/NotSupported";

// Component
export const App = () => {
    const { gameState } = useGameContext();
    const isTouchDevice = useIsTouchDevice();

    const showSetupPanel = !isTouchDevice && gameState.gamePhase === gamePhaseConst.notStarted;

    return (
        <>  
            { isTouchDevice && <NotSupported /> }

            { !isTouchDevice && (
                <>
                    <StatPanel />
                    <Game /> 
                </>
            ) }
            
            { showSetupPanel && (
                <>
                    <Fade />
                    <Settings />
                </>
            ) }
             
        </>
    );
};
