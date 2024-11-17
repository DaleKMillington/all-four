// Project
import { StatPanel } from "./components/statPanel/StatPanel";
import { Game } from "./game/Game";
import { gamePhase as gamePhaseConst } from "./constants/gamePhase.const";
import { useGameContext } from "./game/GameContext";
import { Fade } from "./components/fade/Fade";
import { Settings } from "./components/settings/Settings";

// Component
export const App = () => {
    const { gameState } = useGameContext();
    const showSetupPanel = gameState.gamePhase === gamePhaseConst.notStarted;
    return (
        <>
            { showSetupPanel && (
                <>
                    <Fade />
                    <Settings />
                </>
            ) }
            <StatPanel />
            <Game /> 
        </>
    );
};
