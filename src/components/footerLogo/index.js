import React from "react"

import { FooterLogoWrapper } from "./index.style"

import "bootstrap/dist/css/bootstrap.min.css"

import { StaticImage } from "gatsby-plugin-image"

const FooterLogo = () => {
    return (
        <FooterLogoWrapper>
            <StaticImage
                src="../../images/maroonStudio-logo.png"
                alt="Hero Image"
            />
        </FooterLogoWrapper>
    )
}
export default FooterLogo
