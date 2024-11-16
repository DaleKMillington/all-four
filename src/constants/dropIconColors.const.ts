export const dropIconColors = {
    clear: "CLEAR",
    yellow: "YELLOW",
    red: "RED"
} as const;

export type DropIconColorsType = (typeof dropIconColors)[keyof typeof dropIconColors];
