export const currentPlayerColor = {
    red: 0,
    yellow: 1
} as const;

export type CurrentPlayerColorType = (typeof currentPlayerColor)[keyof typeof currentPlayerColor];
