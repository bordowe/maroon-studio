import React from "react"

import {
    InterestSectionLeftColumnEmailButton,
    InterestSectionLeftColumnEmailButtonTitle,
    InterestSectionLeftColumnEmailButtonSubtitle,
} from "./index.style"

const ContactViaEmailButton = () => {
    return (
        <a
            href="mailto:contact@maroon-studio.com"
            style={{ textDecoration: "none", color: "#73013C" }}
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
