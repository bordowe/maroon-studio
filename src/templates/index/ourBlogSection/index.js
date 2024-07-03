import React from "react"
import {
    OurBlogSectionWrapper,
    OurBlogSectionTextsAreaWrapper,
    OurBlogSectionName,
    OurBlogSectionTitle,
    OurBlogSectionSubtitle,
    OurCaseStudiesSectionLastArticlesWrapper,
} from "./index.style"
import OurBlogSectionSampel from "../../../components/ourBlogSampel"

const OurBlogSection = () => {
    return (
        <OurBlogSectionWrapper>
            <OurBlogSectionTextsAreaWrapper>
                <OurBlogSectionName>Our Blog</OurBlogSectionName>
                <OurBlogSectionTitle>Last articles</OurBlogSectionTitle>
                <OurBlogSectionSubtitle>
                    Yes, we also create valuable content for our clients.
                </OurBlogSectionSubtitle>
            </OurBlogSectionTextsAreaWrapper>
            <OurCaseStudiesSectionLastArticlesWrapper>
                <OurBlogSectionSampel />
            </OurCaseStudiesSectionLastArticlesWrapper>
        </OurBlogSectionWrapper>
    )
}
export default OurBlogSection
