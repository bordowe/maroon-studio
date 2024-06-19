import React from "react"

import LogoFooter from "../../../components/footerLogo/index.js"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import {
    FooterIcon,
    FooterLink,
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
        name: "Serivces",
        link: "#",
    },
    {
        id: 2,
        name: "Blog",
        link: "#",
    },
    {
        id: 3,
        name: "Projects",
        link: "#",
    },
    {
        id: 4,
        name: "About us",
        link: "#",
    },
    {
        id: 5,
        name: "Contact",
        link: "#",
    },
]

const Footer = () => {
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

    return (
        <>
            <FooterWrapper>
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
                            <FooterLink key={id}>
                                <a href={link}>{name}</a>
                            </FooterLink>
                        ))}
                    </FooterLinksWrapper>
                    <FooterRightsReservedWrapper>
                        <FooterThermsPrivacyPolicyWrapper>
                            <FooterTherms>therms</FooterTherms>
                            <FooterPrivacyPolicy>
                                privacy policy
                            </FooterPrivacyPolicy>
                        </FooterThermsPrivacyPolicyWrapper>
                        <FooterRightsReserved>
                            © 2024 Maroon, All rights reserved.
                        </FooterRightsReserved>
                    </FooterRightsReservedWrapper>
                </FooterSecondLine>
            </FooterWrapper>
        </>
    )
}

export default Footer
