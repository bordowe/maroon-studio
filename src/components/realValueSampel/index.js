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
            title: "Odpowiedź do jednej godziny",
            lore: "Jesteśmy dumni z naszego szybkiego czasu reakcji. Skontaktuj się z nami, a my odpowiemy w ciągu godziny, gwarantujemy.",
        },
        {
            id: 2,
            icon: data.DataDrivenMarketingData.childImageSharp.fluid,
            title: "Marketing oparty na danych",
            lore: "Nasze strategie opierają się na dogłębnej analizie danych i badaniach rynku, co gwarantuje skuteczność Twoich kampanii i ich skuteczność w osiąganiu wyników.",
        },
        {
            id: 3,
            icon: data.TimeIcon.childImageSharp.fluid,
            title: "Wszelkie realizacje do 72 godzin",
            lore: "Brzmi podejrzanie? Cóż, nie tym razem... Mamy tak wielu ludzi i dobrze zaprojektowane procesy, że czas dostawy u nas jest jak najkrótszy, a na pewno 72 godziny.",
        },
        {
            id: 4,
            icon: data.RedundantTalkingIcon.childImageSharp.fluid,
            title: "Wartości bez ściemy",
            lore: "Wierzymy w bezpośrednią komunikację i uczciwe postępowanie. Bez żargonu, bez pustych obietnic, tylko prawdziwe rezultaty.",
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
