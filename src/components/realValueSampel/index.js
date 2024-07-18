import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import {
    RealValueSampelWrapper,
    RealValueSampelDataWrapper,
    RealValueSampelDataFirstLine,
    RealValueSampelDataSecondLine,
    RealValueSampelImageWrapper,
    RealValueSampelTitleWrapper,
    RealValueSampelLoreWrapper,
    RealValueSampelTitle,
    RealValueSampelLore,
} from "./index.style"

const RealValueSampel = () => {
    const data = useStaticQuery(graphql`
        query {
            ResponseIcon: file(
                relativePath: { eq: "maroonStudio-responseIcon.png" }
            ) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            DataDrivenMarketingData: file(
                relativePath: { eq: "maroonStudio-dataMarketingIcon.png" }
            ) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            TimeIcon: file(relativePath: { eq: "maroonStudio-timeIcon.png" }) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            RedundantTalkingIcon: file(
                relativePath: { eq: "maroonStudio-redundantTalkingIcon.png" }
            ) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            GreenBonusIcon: file(
                relativePath: { eq: "maroonStudio-greenBonusIcon.png" }
            ) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    const realValueSampelData = [
        {
            id: 1,
            icon: data.ResponseIcon.childImageSharp.fluid,
            title: "Response up to one hour",
            lore: "We pride ourselves on our quick response time. Contact us, and we'll get back to you within an hour, guaranteed.",
        },
        {
            id: 2,
            icon: data.DataDrivenMarketingData.childImageSharp.fluid,
            title: "Data-driven marketing",
            lore: "Our strategies are based on in-depth data analysis and market research, ensuring your campaigns are effective and results-driven.",
        },
        {
            id: 3,
            icon: data.TimeIcon.childImageSharp.fluid,
            title: "Any realizations up to 72 hours",
            lore: "Sound suspicious? Well, not this time... We have such a number of people and well-designed processes that the delivery time with us is as short as possible, and certainly 72 hours.",
        },
        {
            id: 4,
            icon: data.RedundantTalkingIcon.childImageSharp.fluid,
            title: "No-bullshit values",
            lore: "We believe in straightforward communication and honest dealings. No jargon, no empty promises, just real results.",
        },
        // {
        //     id: 5,
        //     icon: data.GreenBonusIcon.childImageSharp.fluid,
        //     title: "Green Bonus",
        //     lore: "We're committed to sustainability. Our digital solutions are designed to be eco-friendly, reducing the carbon footprint of your online presence.",
        // },
    ]

    const animQueueOptions = {
        triggerOnce: true,
    }
    const [ref1, inView1] = useInView(animQueueOptions)
    const [ref2, inView2] = useInView(animQueueOptions)
    const [ref3, inView3] = useInView(animQueueOptions)
    const [ref4, inView4] = useInView(animQueueOptions)

    return (
        <RealValueSampelWrapper>
            <RealValueSampelDataFirstLine>
                {realValueSampelData
                    .slice(0, 2)
                    .map(({ id, icon, title, lore }, index) => (
                        <RealValueSampelDataWrapper
                            key={id}
                            as={motion.div}
                            ref={index === 0 ? ref1 : ref2}
                            initial={{
                                x: index === 0 ? 100 : -100,
                                opacity: 0,
                            }}
                            animate={{
                                x:
                                    (index === 0 && inView1) ||
                                    (index === 1 && inView2)
                                        ? 0
                                        : index === 0
                                        ? 100
                                        : -100,
                                opacity:
                                    (index === 0 && inView1) ||
                                    (index === 1 && inView2)
                                        ? 1
                                        : 0,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 20,
                            }}
                        >
                            <RealValueSampelImageWrapper>
                                <Img
                                    fluid={icon}
                                    alt={title}
                                    style={{ width: "45px", height: "45px" }}
                                />
                            </RealValueSampelImageWrapper>
                            <RealValueSampelTitleWrapper>
                                <RealValueSampelTitle>
                                    {title}
                                </RealValueSampelTitle>
                            </RealValueSampelTitleWrapper>
                            <RealValueSampelLoreWrapper>
                                <RealValueSampelLore>
                                    {lore}
                                </RealValueSampelLore>
                            </RealValueSampelLoreWrapper>
                        </RealValueSampelDataWrapper>
                    ))}
            </RealValueSampelDataFirstLine>
            <RealValueSampelDataSecondLine>
                {realValueSampelData
                    .slice(2, 5)
                    .map(({ id, icon, title, lore }, index) => (
                        <RealValueSampelDataWrapper
                            key={id}
                            as={motion.div}
                            ref={index === 0 ? ref3 : ref4}
                            initial={{
                                x: index === 0 ? 100 : -100,
                                opacity: 0,
                            }}
                            animate={{
                                x:
                                    (index === 0 && inView3) ||
                                    (index === 1 && inView4)
                                        ? 0
                                        : index === 0
                                        ? 100
                                        : -100,
                                opacity:
                                    (index === 0 && inView3) ||
                                    (index === 1 && inView4)
                                        ? 1
                                        : 0,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 20,
                            }}
                        >
                            <RealValueSampelImageWrapper>
                                <Img
                                    fluid={icon}
                                    alt={title}
                                    style={{ width: "45px", height: "45px" }}
                                />
                            </RealValueSampelImageWrapper>
                            <RealValueSampelTitleWrapper>
                                <RealValueSampelTitle>
                                    {title}
                                </RealValueSampelTitle>
                            </RealValueSampelTitleWrapper>
                            <RealValueSampelLoreWrapper>
                                <RealValueSampelLore>
                                    {lore}
                                </RealValueSampelLore>
                            </RealValueSampelLoreWrapper>
                        </RealValueSampelDataWrapper>
                    ))}
            </RealValueSampelDataSecondLine>
        </RealValueSampelWrapper>
    )
}

export default RealValueSampel
