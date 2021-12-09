export const size = {
  mobile: '360px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1536px',
  desktop: '1920px'
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`
};

const breakpoints = [480, 1024];

export const mp = breakpoints.map(bp => `@media (min-width: ${bp}px)`);
