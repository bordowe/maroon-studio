import React from "react"
import ReactGA from "react-ga4"

import {
    InterestSectionLeftColumnEmailButton,
    InterestSectionLeftColumnEmailButtonTitle,
    InterestSectionLeftColumnEmailButtonSubtitle,
} from "./index.style"

const handleViaEmailClick = () => {
    ReactGA.event({
        category: "Email",
        action: "Click",
        label: "Via Email Button",
    })
}

const ContactViaEmailButton = () => {
    return (
        <a
            href="mailto:contact@maroon-studio.com"
            style={{ textDecoration: "none", color: "#73013C" }}
            onClick={handleViaEmailClick}
        >
            <InterestSectionLeftColumnEmailButton>
                <InterestSectionLeftColumnEmailButtonTitle>
                    Poprzez E-mail
                </InterestSectionLeftColumnEmailButtonTitle>
                <InterestSectionLeftColumnEmailButtonSubtitle>
                    Uzyskaj darmową wycenę
                </InterestSectionLeftColumnEmailButtonSubtitle>
            </InterestSectionLeftColumnEmailButton>
        </a>
    )
}
export default ContactViaEmailButton
