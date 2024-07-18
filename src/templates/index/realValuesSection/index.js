import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
    RealValuesSectionWrapper,
    RealValuesSectionTitleTexts,
    RealValuesSectionTitle,
    RealValuesSectionSubtitle,
    ValuesWrapper,
} from "./index.style"

import RealValueSampel from "../../../components/realValueSampel"

const RealValuesSection = () => {
    const animQueueOptions = {
        triggerOnce: true,
    }
    const [ref1, inView1] = useInView(animQueueOptions)

    return (
        <RealValuesSectionWrapper>
            <RealValuesSectionTitleTexts
                as={motion.div}
                ref={ref1}
                initial={{
                    y: 100,
                    opacity: 0,
                }}
                animate={{
                    y: inView1 ? 0 : 100,
                    opacity: inView1 ? 1 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                }}
            >
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
