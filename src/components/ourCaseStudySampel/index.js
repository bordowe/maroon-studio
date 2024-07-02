import React from "react"
import {
    OurCaseStudiesSampelWrapper,
    OurCaseStudiesSampelTextsArea,
    OurCaseStudiesSampelDateCategoryWrapper,
    OurCaseStudiesSampelCategoryText,
    OurCaseStudiesSampelTitle,
    OurCaseStudiesSampelDateText,
    OurCaseStudiesSampelDataWrapper,
} from "./index.style"

import CaseStudyBackground1 from "../../images/maroonStudio-caseStudyImage1.png"
import CaseStudyBackground2 from "../../images/maroonStudio-caseStudyImage2.png"

const OurCaseStudiesSampel = () => {
    const ourCaseStudiesSampelData = [
        {
            id: 1,
            backgroundImage: CaseStudyBackground1,
            title: "Online marketing for HBC Inc.",
            date: "May 2024",
            category: "case study",
        },
        {
            id: 2,
            backgroundImage: CaseStudyBackground2,
            title: "Online marketing for HBC Inc.",
            date: "July 2024",
            category: "case study",
        },
    ]

    return (
        <OurCaseStudiesSampelWrapper>
            {ourCaseStudiesSampelData.map((caseStudy) => (
                <OurCaseStudiesSampelDataWrapper
                    key={caseStudy.id}
                    style={{
                        backgroundImage: `url(${caseStudy.backgroundImage})`,
                    }}
                >
                    <OurCaseStudiesSampelTextsArea>
                        <OurCaseStudiesSampelTitle>
                            {caseStudy.title}
                        </OurCaseStudiesSampelTitle>
                        <OurCaseStudiesSampelDateCategoryWrapper>
                            <OurCaseStudiesSampelCategoryText>
                                {caseStudy.category}
                            </OurCaseStudiesSampelCategoryText>
                            <OurCaseStudiesSampelDateText>
                                {caseStudy.date}
                            </OurCaseStudiesSampelDateText>
                        </OurCaseStudiesSampelDateCategoryWrapper>
                    </OurCaseStudiesSampelTextsArea>
                </OurCaseStudiesSampelDataWrapper>
            ))}
        </OurCaseStudiesSampelWrapper>
    )
}

export default OurCaseStudiesSampel
