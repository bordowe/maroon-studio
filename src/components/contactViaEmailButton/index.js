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
                    Via Email
                </InterestSectionLeftColumnEmailButtonTitle>
                <InterestSectionLeftColumnEmailButtonSubtitle>
                    Get free quote
                </InterestSectionLeftColumnEmailButtonSubtitle>
            </InterestSectionLeftColumnEmailButton>
        </a>
    )
}
export default ContactViaEmailButton
