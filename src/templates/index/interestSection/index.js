import React, { useState } from "react"
import * as Yup from "yup"
import axios from "axios"
import { useFormik } from "formik"

import {
    InterestSectionData,
    InterestSectionWrapper,
    InterestSectionLeftColumn,
    InterestSectionRightColumn,
    InterestSectionLeftColumnTitleSubtitleWrapper,
    InterestSectionLeftColumnTitle,
    InterestSectionLeftColumnSubtitle,
    InterestSectionLeftColumnLore,
    InterestSectionLeftColumnButtonsWrapper,
    InterestSectionRightColumnNameInput,
    InterestSectionRightColumnEmailInput,
    InterestSectionRightColumnMessageInput,
    InterestSectionRightColumnFooter,
    InterestSectionPrivacyPolicy,
    InterestSectionSendFormButton,
    Form,
} from "./index.style"

import ContactViaEmailButton from "../../../components/contactViaEmailButton"
import WhatsappCommingSoonButton from "../../../components/whatsappCommingSoonButton"
import ContactSuccessSendText from "../../../components/contactSuccessSendText"

const InterestSection = () => {
    const [isSent, setIsSent] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("This field is required"),
            message: Yup.string().required("This field is required"),
        }),
        onSubmit: async (values) => {
            try {
                await axios.post(
                    "https://mtzqdrv456.execute-api.eu-north-1.amazonaws.com/dev/contact",
                    {
                        name: values.name,
                        email: values.email,
                        message: values.message,
                    },
                    setIsSent(true)
                )
            } catch (error) {
                console.error("Error: ", error)
            }
        },
    })

    return (
        <InterestSectionWrapper>
            {!isSent ? (
                <InterestSectionData>
                    <InterestSectionLeftColumn>
                        <InterestSectionLeftColumnTitleSubtitleWrapper>
                            <InterestSectionLeftColumnTitle>
                                Interested?
                            </InterestSectionLeftColumnTitle>
                            <InterestSectionLeftColumnSubtitle>
                                Write, in an hour you will get an answer!
                            </InterestSectionLeftColumnSubtitle>
                        </InterestSectionLeftColumnTitleSubtitleWrapper>
                        <InterestSectionLeftColumnLore>
                            On Internet marketing, creating websites, running
                            social media, etc... You don't need to know about
                            it, leave it to us!
                        </InterestSectionLeftColumnLore>
                        <InterestSectionLeftColumnButtonsWrapper>
                            <ContactViaEmailButton />
                            <WhatsappCommingSoonButton />
                        </InterestSectionLeftColumnButtonsWrapper>
                    </InterestSectionLeftColumn>
                    <InterestSectionRightColumn>
                        <Form onSubmit={formik.handleSubmit}>
                            <InterestSectionRightColumnNameInput
                                onBlur={formik.handleBlur}
                                name="name"
                                id="name"
                                type="text"
                                placeholder="Name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                autoComplete="name"
                            />
                            <InterestSectionRightColumnEmailInput
                                onBlur={formik.handleBlur}
                                name="email"
                                id="email"
                                type="email"
                                placeholder="E-mail*"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                autoComplete="email"
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <p>{formik.errors.email}</p>
                            ) : null}
                            <InterestSectionRightColumnMessageInput
                                onBlur={formik.handleBlur}
                                name="message"
                                id="message"
                                type="text"
                                placeholder="Message*"
                                value={formik.values.message}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.message && formik.errors.message ? (
                                <p>{formik.errors.message}</p>
                            ) : null}
                            <InterestSectionRightColumnFooter>
                                <InterestSectionPrivacyPolicy>
                                    Your data will be processed by Maroon
                                    Studio, in accordance with its Privacy
                                    Policy and Cookies Policy, for the purpose
                                    of handling the contact form.
                                </InterestSectionPrivacyPolicy>
                                <InterestSectionSendFormButton type="submit">
                                    Send
                                </InterestSectionSendFormButton>
                            </InterestSectionRightColumnFooter>
                        </Form>
                    </InterestSectionRightColumn>
                </InterestSectionData>
            ) : (
                <InterestSectionData>
                    <ContactSuccessSendText />
                </InterestSectionData>
            )}
        </InterestSectionWrapper>
    )
}
export default InterestSection
