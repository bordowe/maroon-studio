import React from "react"
import { useRef } from "react"
import { useInView } from "framer-motion"
import {
    OurServicesListSectionDataWrapper,
    OurServicesListSectionTextsAreaWrapper,
    OurServicesListSectionWrapper,
    OurServicesListSectionName,
    OurServicesListSectionTitle,
    OurServicesListSectionSubtitle,
    OurServicesListSectionSampelsWrapper,
} from "./index.style"

import OurServicesListSectionSampel from "../../../components/ourServicesListSampel"

const OurServicesListSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <OurServicesListSectionWrapper
            id="services-section"
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : 0,
                transition: "0.75s",
            }}
        >
            <OurServicesListSectionDataWrapper>
                <OurServicesListSectionTextsAreaWrapper>
                    <OurServicesListSectionName>
                        Our services list
                    </OurServicesListSectionName>
                    <OurServicesListSectionTitle>
                        Everything you need to increase sales
                    </OurServicesListSectionTitle>
                    <OurServicesListSectionSubtitle>
                        With us, you don't need to know about technical matters
                        or professional nomenclature. Just choose what you think
                        you need, and we will take care of selecting the right
                        technology, etc.
                    </OurServicesListSectionSubtitle>
                </OurServicesListSectionTextsAreaWrapper>
                <OurServicesListSectionSampelsWrapper>
                    <OurServicesListSectionSampel />
                </OurServicesListSectionSampelsWrapper>
            </OurServicesListSectionDataWrapper>
        </OurServicesListSectionWrapper>
    )
}
export default OurServicesListSection
