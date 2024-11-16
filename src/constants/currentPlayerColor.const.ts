export const currentPlayerColor = {
    red: "RED",
    yellow: "YELLOW"
} as const;

export type CurrentPlayerColorType = (typeof currentPlayerColor)[keyof typeof currentPlayerColor];
