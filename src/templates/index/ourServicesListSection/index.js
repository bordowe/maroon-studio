import React from "react"

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
    return (
        <OurServicesListSectionWrapper>
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
