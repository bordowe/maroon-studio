export const breakpoint = {
    largeDesktop: 1440,
    desktop: 1280,
    laptop: 1024,
    tablet: 768,
    largeMobile: 480,
    mobile: 320,
}
const media = {
    desktop: `(min-width: ${breakpoint.desktop}px)`,
    laptop: `(max-width: ${breakpoint.laptop}px)`,
    tablet: `(max-width: ${breakpoint.tablet}px)`,
    largeMobile: `(max-width: ${breakpoint.largeMobile}px)`,
    mobile: `(max-width: ${breakpoint.mobile}px)`,
}
export const theme = {
    media,
}
