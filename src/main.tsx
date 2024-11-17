// Third Party
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Project
import './scss/main.scss';
import { App } from './App.tsx';
import { GameProvider } from "./game/GameContext";

// Root Component
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GameProvider>
        <App />
    </GameProvider>
  </StrictMode>,
);
