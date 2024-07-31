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
                    fluid(maxHeight: 30, maxWidth: 80) {
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
                    width: "80px",
                    height: "30px",
                }}
            />
        </LogoNavbar>
    )
}
export default Logo
