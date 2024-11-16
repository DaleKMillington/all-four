export const gameOver = {
    draw: "DRAW",
    won: "WON",
    inProgress: "IN PROGRESS"
} as const;

export type GameOverType = (typeof gameOver)[keyof typeof gameOver];
