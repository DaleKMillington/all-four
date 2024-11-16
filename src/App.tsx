// Project
import { StatPanel } from "./components/statPanel/StatPanel";
import { Game } from "./game/Game";
import { GameProvider } from "./game/GameContext";

// Component
export const App = () => {
  return (
    <GameProvider>
        <StatPanel />
        <Game /> 
    </GameProvider>
  );
};
