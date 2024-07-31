import React from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import LogoFooter from "../../../components/footerLogo/index.js"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import {
    FooterIcon,
    FooterLink,
    FooterLinkButton,
    FooterLinksWrapper,
    FooterPrivacyPolicy,
    FooterRightsReserved,
    FooterRightsReservedWrapper,
    FooterSecondLine,
    FooterTherms,
    FooterThermsPrivacyPolicyWrapper,
    SocialIconsWrapper,
} from "./index.style"
import { FooterIconsWrapper } from "./index.style"
import { FooterWrapper } from "./index.style"
import { FooterFirstLine } from "./index.style"

const footerLinksData = [
    {
        id: 1,
        name: "Usługi",
        link: "services-section",
    },
    {
        id: 2,
        name: "Blog",
        link: "blog-section",
    },
    {
        id: 3,
        name: "Case Studies",
        link: "casestudies-section",
    },
    {
        id: 4,
        name: "O Nas",
        link: "real-values-section",
    },
    {
        id: 5,
        name: "Kontakt",
        link: "contact-section",
    },
]

const Footer = () => {
    const animQueueOptions = {
        triggerOnce: true,
    }
    const [ref1, inView1] = useInView(animQueueOptions)

    const FooterIconsData = useStaticQuery(graphql`
        query {
            InstagramIcon: file(
                relativePath: { eq: "maroonStudio-instagramIcon.png" }
            ) {
                childImageSharp {
                    fluid(maxHeight: 25, maxWidth: 25) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            WhatsappIcon: file(
                relativePath: { eq: "maroonStudio-whatsappIcon.png" }
            ) {
                childImageSharp {
                    fluid(maxHeight: 25, maxWidth: 25) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            XIcon: file(relativePath: { eq: "maroonStudio-xIcon.png" }) {
                childImageSharp {
                    fluid(maxHeight: 25, maxWidth: 25) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            FacebookIcon: file(
                relativePath: { eq: "maroonStudio-facebookIcon.png" }
            ) {
                childImageSharp {
                    fluid(maxHeight: 25, maxWidth: 25) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            BehanceIcon: file(
                relativePath: { eq: "maroonStudio-behanceIcon.png" }
            ) {
                childImageSharp {
                    fluid(maxHeight: 25, maxWidth: 25) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            LinkedinIcon: file(
                relativePath: { eq: "maroonStudio-linkedinIcon.png" }
            ) {
                childImageSharp {
                    fluid(maxHeight: 25, maxWidth: 25) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    const footerIconsData = [
        {
            id: 1,
            name: "InstagramIcon",
            alt: "Instagram",
            data: FooterIconsData.InstagramIcon,
        },
        {
            id: 2,
            name: "WhatsappIcon",
            alt: "Whatsapp",
            data: FooterIconsData.WhatsappIcon,
        },
        {
            id: 3,
            name: "XIcon",
            alt: "X",
            data: FooterIconsData.XIcon,
        },
        {
            id: 4,
            name: "FacebookIcon",
            alt: "Facebook",
            data: FooterIconsData.FacebookIcon,
        },
        {
            id: 5,
            name: "BehanceIcon",
            alt: "Behance",
            data: FooterIconsData.BehanceIcon,
        },
        {
            id: 6,
            name: "LinkedinIcon",
            alt: "Linkedin",
            data: FooterIconsData.LinkedinIcon,
        },
    ]

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <>
            <FooterWrapper
                as={motion.div}
                ref={ref1}
                initial={{
                    y: 200,
                    opacity: 0,
                }}
                animate={{
                    y: inView1 ? 0 : 200,
                    opacity: inView1 ? 1 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                }}
            >
                <FooterFirstLine>
                    <LogoFooter />
                    <SocialIconsWrapper>
                        {footerIconsData.map(({ id, alt, data }) => (
                            <FooterIconsWrapper key={id}>
                                <FooterIcon>
                                    <Img
                                        fluid={data.childImageSharp.fluid}
                                        alt={alt}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </FooterIcon>
                            </FooterIconsWrapper>
                        ))}
                    </SocialIconsWrapper>
                </FooterFirstLine>
                <FooterSecondLine>
                    <FooterLinksWrapper>
                        {footerLinksData.map(({ id, name, link }) => (
                            <FooterLink
                                key={id}
                                style={{
                                    opacity: id === 2 || id === 3 ? 0.5 : 1,
                                    pointerEvents:
                                        id === 2 || id === 3 ? "none" : "auto",
                                }}
                            >
                                <FooterLinkButton
                                    onClick={() => scrollToSection(link)}
                                >
                                    {name}
                                </FooterLinkButton>
                            </FooterLink>
                        ))}
                    </FooterLinksWrapper>
                    <FooterRightsReservedWrapper>
                        <FooterThermsPrivacyPolicyWrapper>
                            <FooterTherms>Warunki</FooterTherms>
                            <FooterPrivacyPolicy>
                                Polityka Prywatności
                            </FooterPrivacyPolicy>
                        </FooterThermsPrivacyPolicyWrapper>
                        <FooterRightsReserved>
                            © 2024 Studio Bordowe, Wszelkie prawa zastrzeżone.
                        </FooterRightsReserved>
                    </FooterRightsReservedWrapper>
                </FooterSecondLine>
            </FooterWrapper>
        </>
    )
}

export default Footer
