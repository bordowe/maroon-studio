import React from "react"

import {
    RealValuesSectionWrapper,
    RealValuesSectionTitleTexts,
    RealValuesSectionTitle,
    RealValuesSectionSubtitle,
    ValuesWrapper,
} from "./index.style"

import RealValueSampel from "../../../components/realValueSampel"

const RealValuesSection = () => {
    return (
        <RealValuesSectionWrapper>
            <RealValuesSectionTitleTexts>
                <RealValuesSectionTitle>Real values</RealValuesSectionTitle>
                <RealValuesSectionSubtitle>
                    Are you tired of the clapped-out values of other agencies?
                    With us, you'll only find ones you can realistically benefit
                    from!
                </RealValuesSectionSubtitle>
            </RealValuesSectionTitleTexts>
            <ValuesWrapper>
                <RealValueSampel />
            </ValuesWrapper>
        </RealValuesSectionWrapper>
    )
}

export default RealValuesSection
