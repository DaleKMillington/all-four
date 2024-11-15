export const cellColors = {
    clear: 0,
    red: 1,
    yellow: 2
} as const;

export type CellColorsType = (typeof cellColors)[keyof typeof cellColors];
