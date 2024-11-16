export const cellColors = {
    clear: "CLEAR",
    red: "RED",
    yellow: "YELLOW"
} as const;

export type CellColorsType = (typeof cellColors)[keyof typeof cellColors];
