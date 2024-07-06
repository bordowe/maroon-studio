import * as React from "react"
import Layout from "../components/layout/index"
import Hero from "../templates/index/hero"
import RealValuesSection from "../templates/index/realValuesSection"
import OurServicesListSection from "../templates/index/ourServicesListSection"
import OurCaseStudiesSection from "../templates/index/ourCaseStudiesSection"
import OurBlogSection from "../templates/index/ourBlogSection"
import InterestSection from "../templates/index/interestSection"
const IndexPage = () => {
    return (
        <Layout>
            <Hero />
            <RealValuesSection />
            <OurServicesListSection />
            {/* <OurCaseStudiesSection />
            <OurBlogSection /> */}
            <InterestSection />
        </Layout>
    )
}
export default IndexPage
