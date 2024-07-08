import React from "react"
import { FreeQuoteButton, OurServicesButton } from "./index.style"

const HeroBodyButtons = () => {
    const scrollToServices = (divId) => {
        const id = document.getElementById(divId)
        if (id) {
            id.scrollIntoView({ behavior: "smooth" })
        }
    }
    const scrollToContact = (divId) => {
        const id = document.getElementById(divId)
        if (id) {
            id.scrollIntoView({ behavior: "smooth" })
        }
    }
    return (
        <>
            <FreeQuoteButton onClick={() => scrollToContact("contact-section")}>
                Free quote
            </FreeQuoteButton>
            <OurServicesButton
                onClick={() => scrollToServices("services-section")}
            >
                Our services
            </OurServicesButton>
        </>
    )
}
export default HeroBodyButtons
