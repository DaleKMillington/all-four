export const currentPlayer = {
    human: 0,
    ai: 1
} as const;

export type CurrentPlayerType = (typeof currentPlayer)[keyof typeof currentPlayer];
