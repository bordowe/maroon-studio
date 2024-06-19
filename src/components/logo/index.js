import React from "react"

import { LogoNavbar } from "./index.style"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
    const imagesData = useStaticQuery(graphql`
        query {
            WebsitesServiceIcon: file(
                relativePath: { eq: "maroonStudio-logo.png" }
            ) {
                childImageSharp {
                    fluid(maxHeight: 28, maxWidth: 70) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <LogoNavbar>
            <Img
                fluid={imagesData.WebsitesServiceIcon.childImageSharp.fluid}
                alt="Maroon Studio Logo"
                style={{
                    width: "70px",
                    height: "28px",
                }}
            />
        </LogoNavbar>
    )
}
export default Logo
