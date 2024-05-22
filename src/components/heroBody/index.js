import React from "react"

import "bootstrap/dist/css/bootstrap.min.css"

import { StaticImage } from "gatsby-plugin-image"

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
    return (
        <HeroBodyWrapper>
            <HeroBodyImage>
                <StaticImage
                    src="../../images/maroonStudio-heroImage.png"
                    alt="Hero Image"
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
                        success is the values we uphold.{" "}
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
