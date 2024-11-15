export const dropIconColors = {
    clear: 0,
    yellow: 1,
    red: 2
} as const;

export type DropIconColorsType = (typeof dropIconColors)[keyof typeof dropIconColors];
