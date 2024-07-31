import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

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

    const animQueueOptions = {
        triggerOnce: true,
    }
    const [ref1, inView1] = useInView(animQueueOptions)
    const [ref2, inView2] = useInView(animQueueOptions)

    return (
        <HeroBodyWrapper>
            <HeroBodyImage
                as={motion.div}
                ref={ref1}
                initial={{
                    x: 100,
                    opacity: 0,
                }}
                animate={{
                    x: inView1 ? 0 : 100,
                    opacity: inView1 ? 1 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                }}
            >
                <Img
                    fluid={imagesData.HeroSectionImage.childImageSharp.fluid}
                    alt="Woman cheking maroon-studio.com"
                    style={{ width: "100%", height: "100%" }}
                />
            </HeroBodyImage>
            <HeroContentWrapper
                as={motion.div}
                ref={ref2}
                initial={{
                    x: -100,
                    opacity: 0,
                }}
                animate={{
                    x: inView2 ? 0 : -100,
                    opacity: inView2 ? 1 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                }}
            >
                <HeroBodyTextArea>
                    <HeroBodyTextTopDescription>
                        agencja digitalowa z prawdziwymi wartościami
                    </HeroBodyTextTopDescription>
                    <HeroBodyTextTitle>studio bordowe</HeroBodyTextTitle>
                    <HeroBodyTextSubtitle>
                        Twój cel, nasz wspólny sukces
                    </HeroBodyTextSubtitle>
                    <HeroBodyTextBottomDescription>
                        Agencja cyfrowa, w której najważniejszym czynnikiem
                        sukcesu są wartości, które wyznajemy.
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
