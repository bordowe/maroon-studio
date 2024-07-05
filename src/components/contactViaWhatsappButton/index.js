import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
    InterestSectionLeftColumnWhatsappButton,
    InterestSectionLeftColumnWhatsappButtonTextArea,
    InterestSectionLeftColumnWhatsappButtonTitle,
    InterestSectionLeftColumnWhatsappButtonSubtitle,
} from "./index.style"
const ContactViaWhatsappButton = () => {
    return (
        <InterestSectionLeftColumnWhatsappButton>
            <StaticImage
                age
                src="../../../images/maroonStudio-lightWhatsappIcon.png"
                alt="Contact Via Whatsapp"
                width={24}
                height={24}
            />
            <InterestSectionLeftColumnWhatsappButtonTextArea>
                <InterestSectionLeftColumnWhatsappButtonTitle>
                    WhatsApp
                </InterestSectionLeftColumnWhatsappButtonTitle>
                <InterestSectionLeftColumnWhatsappButtonSubtitle>
                    Respond up to 1 hour
                </InterestSectionLeftColumnWhatsappButtonSubtitle>
            </InterestSectionLeftColumnWhatsappButtonTextArea>
        </InterestSectionLeftColumnWhatsappButton>
    )
}
export default ContactViaWhatsappButton
