export const currentPlayer = {
    human: "HUMAN",
    ai: "AI"
} as const;

export type CurrentPlayerType = (typeof currentPlayer)[keyof typeof currentPlayer];
