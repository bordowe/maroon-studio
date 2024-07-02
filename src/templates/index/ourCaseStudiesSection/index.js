import React from "react"
import {
    OurCaseStudiesSectionDataWrapper,
    OurCaseStudiesSectionWrapper,
    OurCaseStudiesSectionTextsAreaWrapper,
    OurCaseStudiesSectionName,
    OurCaseStudiesSectionTitle,
    OurCaseStudiesSectionSubtitle,
    OurCaseStudiesSectionArticlesWrapper,
} from "./index.style"
import OurCaseStudiesSampel from "../../../components/ourCaseStudySampel"

const OurCaseStudiesSection = () => {
    return (
        <OurCaseStudiesSectionWrapper>
            <OurCaseStudiesSectionDataWrapper>
                <OurCaseStudiesSectionTextsAreaWrapper>
                    <OurCaseStudiesSectionName>
                        Our Case Studies
                    </OurCaseStudiesSectionName>
                    <OurCaseStudiesSectionTitle>
                        Latest Case Study
                    </OurCaseStudiesSectionTitle>
                    <OurCaseStudiesSectionSubtitle>
                        We share our case studies proving what results we are
                        delivering
                    </OurCaseStudiesSectionSubtitle>
                </OurCaseStudiesSectionTextsAreaWrapper>
                <OurCaseStudiesSectionArticlesWrapper>
                    <OurCaseStudiesSampel />
                </OurCaseStudiesSectionArticlesWrapper>
            </OurCaseStudiesSectionDataWrapper>
        </OurCaseStudiesSectionWrapper>
    )
}
export default OurCaseStudiesSection
