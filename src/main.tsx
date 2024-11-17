// Third Party
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Project
import { App } from './App.tsx'
import './scss/main.scss'

// Local
import { GameProvider } from "./game/GameContext";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GameProvider>
        <App />
    </GameProvider>
  </StrictMode>,
)
