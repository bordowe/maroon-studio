import React from "react"

import LogoFooter from "../../../components/footerLogo/index.js"
import InstagramIcon from "../../../images/maroonStudio-instagramIcon.png"
import WhatsappIcon from "../../../images/maroonStudio-whatsappIcon.png"
import XIcon from "../../../images/maroonStudio-xIcon.png"
import FacebookIcon from "../../../images/maroonStudio-facebookIcon.png"
import BehanceIcon from "../../../images/maroonStudio-behanceIcon.png"
import LinkedinIcon from "../../../images/maroonStudio-linkedinIcon.png"

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

const footerIconsData = [
    {
        id: 1,
        name: "InstagramIcon",
        alt: "Instagram",
    },
    {
        id: 2,
        name: "WhatsappIcon",
        alt: "Whatsapp",
    },
    {
        id: 3,
        name: "XIcon",
        alt: "X",
    },
    {
        id: 4,
        name: "FacebookIcon",
        alt: "Facebook",
    },
    {
        id: 5,
        name: "BehanceIcon",
        alt: "Behance",
    },
    {
        id: 6,
        name: "LinkedinIcon",
        alt: "Linkedin",
    },
]

const iconMap = {
    InstagramIcon,
    WhatsappIcon,
    XIcon,
    FacebookIcon,
    BehanceIcon,
    LinkedinIcon,
}

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
    return (
        <>
            <FooterWrapper>
                <FooterFirstLine>
                    <LogoFooter />
                    <SocialIconsWrapper>
                        {footerIconsData.map(({ id, name, alt }) => {
                            const Icon = iconMap[name]
                            return (
                                <FooterIconsWrapper key={id}>
                                    <FooterIcon>
                                        <img src={Icon} alt={alt} />
                                    </FooterIcon>
                                </FooterIconsWrapper>
                            )
                        })}
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
