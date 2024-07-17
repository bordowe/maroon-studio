export const breakpoint = {
    largeDesktop: 1440,
    desktop: 1280,
    laptop: 1024,
    tablet: 768,
    largeMobile: 480,
    mobile: 320,
}
const media = {
    largeDesktop: `(width < ${breakpoint.largeDesktop}px)`,
    desktop: `(width < ${breakpoint.largeDesktop}px)`,
    laptop: `(width < ${breakpoint.desktop}px)`,
    tablet: `(width < ${breakpoint.laptop}px)`,
    largeMobile: `(width < ${breakpoint.tablet}px)`,
    mobile: `(width < ${breakpoint.largeMobile}px)`,
}
export const theme = {
    media,
}

export const colors = {
    navbarHoverLinkColor: "#F7C3D9",
    primaryTextColor: "#73013C",
    secondaryTextColor: "#FFEFF5",
    primaryButtonTextColor: "#FFEFF5",
    secondaryButtonTextColor: "#73013C",
    primaryButtonColor: "#73013C",
    secondaryButtonColor: "#FFEFF5",
    primaryButtonHoverColor: "#36001C",
    secondaryButtonHoverColor: "#F7CDDC",
    tagBackgroundColor: "#F7CDDC",
    sectionBackgroundColor: "#FFE0EB",
    secondarySectionBackgroundColor: "#73013C",
}
