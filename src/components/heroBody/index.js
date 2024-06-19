import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import {
    HeroBodyImage,
    HeroContentWrapper,
    HeroBodyTextArea,
    HeroBodyTextBottomDescription,
    HeroBodyTextSubtitle,
    HeroBodyTextTitle,
    HeroBodyTextTopDescription,
    HeroBodyWrapper,
    HeroButtonWrapper,
} from "./index.style"

import HeroBodyButtons from "../heroBodyButtons"

const HeroBody = () => {
    const imagesData = useStaticQuery(graphql`
        query {
            HeroSectionImage: file(
                relativePath: { eq: "maroonStudio-heroImage.png" }
            ) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <HeroBodyWrapper>
            <HeroBodyImage>
                <Img
                    fluid={imagesData.HeroSectionImage.childImageSharp.fluid}
                    alt="Woman cheking maroon-studio.com"
                    style={{ width: "100%", height: "100%" }}
                />
            </HeroBodyImage>
            <HeroContentWrapper>
                <HeroBodyTextArea>
                    <HeroBodyTextTopDescription>
                        real values digital agency
                    </HeroBodyTextTopDescription>
                    <HeroBodyTextTitle>maroon studio</HeroBodyTextTitle>
                    <HeroBodyTextSubtitle>
                        Your goal, our mutual success
                    </HeroBodyTextSubtitle>
                    <HeroBodyTextBottomDescription>
                        A digital agency in which the most important factor for
                        success is the values we uphold.
                    </HeroBodyTextBottomDescription>
                </HeroBodyTextArea>
                <HeroButtonWrapper>
                    <HeroBodyButtons />
                </HeroButtonWrapper>
            </HeroContentWrapper>
        </HeroBodyWrapper>
    )
}

export default HeroBody
