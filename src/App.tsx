// Project
import { Menu } from "./components/menu/Menu";
import { Game } from "./game/Game";
import { GameProvider } from "./game/GameContext";

// Component
export const App = () => {
  return (
    <GameProvider>
        <Menu />
        <Game /> 
    </GameProvider>
  );
};
