export const gamePhase = {
    notStarted: "NOT STARTED",
    inProgress: "IN PROGRESS",
    draw: "DRAW",
    won: "WON"
} as const;

export type GamePhaseType = (typeof gamePhase)[keyof typeof gamePhase];
