import React from "react"
import {
    SuccessSendTextWrapper,
    SuccessSendTextTitle,
    SuccessSendTextSubtitle,
} from "./index.style"

const ContactSuccessSendText = () => {
    return (
        <SuccessSendTextWrapper>
            <SuccessSendTextTitle>Thank you!</SuccessSendTextTitle>
            <SuccessSendTextSubtitle>
                We will contact you as soon as possible
            </SuccessSendTextSubtitle>
        </SuccessSendTextWrapper>
    )
}
export default ContactSuccessSendText
