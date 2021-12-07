export const STRING_MAX_LENGTH = 115;

const breakpoints = [480, 1024];

export const mp = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
