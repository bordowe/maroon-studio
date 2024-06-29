import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import {
    OurServicesListSectionSampelImageWrapper,
    OurServicesListSectionSampelHeadersTextWrapper,
    OurServicesListSectionSampelWrapper,
    OurServicesListSectionSampelTypeTitle,
    OurServicesListSectionSampelTitle,
    OurServicesListSectionSampelLore,
    OurServicesListSectionSampelWholeItems,
    OurServicesListSectionSampelButton,
} from "./index.style"

const OurServicesListSectionSampel = () => {
    const data = useStaticQuery(graphql`
        query {
            WebsitesIcon: file(
                relativePath: { eq: "maroonStudio-bigWebistesIcon.png" }
            ) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            SeoIcon: file(relativePath: { eq: "maroonStudio-bigSeoIcon.png" }) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            OnlineMarketingIcon: file(
                relativePath: {
                    eq: "maroonStudio-bigSocialMediaManagementIcon.png"
                }
            ) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            SocialMediaManagementIcon: file(
                relativePath: { eq: "maroonStudio-bigMarketingOnlineIcon.png" }
            ) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    const realValueSampelData = [
        {
            id: 1,
            icon: data.WebsitesIcon.childImageSharp.fluid,
            title: "Websites",
            lore: "Our team designs and develops custom, responsive websites that are tailored to meet your specific business needs. Whether you require a sleek, modern e-commerce platform or a professional corporate site, we ensure that your online presence is both visually appealing and highly functional. Our websites are optimized for performance, ensuring fast loading times and seamless user experiences across all devices.",
            type: "services",
            buttonText: "Learn more",
        },
        {
            id: 2,
            icon: data.SeoIcon.childImageSharp.fluid,
            title: "SEO",
            lore: "Boost your visibility on search engines with our expert SEO strategies. We conduct comprehensive keyword research, optimize on-page elements, and build high-quality backlinks to improve your search engine rankings. Our approach is data-driven and tailored to your industry, helping you attract more organic traffic and convert visitors into loyal customers.",
            type: "services",
            buttonText: "Learn more",
        },
        {
            id: 3,
            icon: data.OnlineMarketingIcon.childImageSharp.fluid,
            title: "Online marketing",
            lore: "Our comprehensive online marketing solutions are designed to grow your business by reaching the right audience at the right time. We create and manage targeted advertising campaigns across multiple platforms, including Google Ads, social media, and email marketing. By leveraging advanced analytics and A/B testing, we continuously optimize your campaigns for maximum ROI, ensuring that every marketing dollar is well spent.",
            type: "services",
            buttonText: "Learn more",
        },
        {
            id: 4,
            icon: data.SocialMediaManagementIcon.childImageSharp.fluid,
            title: "Social media management",
            lore: "Effective social media strategies to engage your audience and increase your reach. We handle everything from content creation and scheduling to community management and analytics. Our team crafts compelling posts, stories, and ads that resonate with your target audience, driving engagement and brand loyalty. Stay connected with your customers and build a vibrant online community with our social media management services.",
            type: "services",
            buttonText: "Learn more",
        },
    ]

    return (
        <>
            {realValueSampelData.map((service) => (
                <OurServicesListSectionSampelWrapper key={service.id}>
                    <OurServicesListSectionSampelImageWrapper>
                        <Img
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                            fluid={service.icon}
                            alt={service.title}
                        />
                    </OurServicesListSectionSampelImageWrapper>
                    <OurServicesListSectionSampelWholeItems>
                        <OurServicesListSectionSampelHeadersTextWrapper>
                            <OurServicesListSectionSampelTypeTitle>
                                {service.type}
                            </OurServicesListSectionSampelTypeTitle>
                            <OurServicesListSectionSampelTitle>
                                {service.title}
                            </OurServicesListSectionSampelTitle>
                            <OurServicesListSectionSampelLore>
                                {service.lore}
                            </OurServicesListSectionSampelLore>
                            <OurServicesListSectionSampelButton>
                                {service.buttonText}
                            </OurServicesListSectionSampelButton>
                        </OurServicesListSectionSampelHeadersTextWrapper>
                    </OurServicesListSectionSampelWholeItems>
                </OurServicesListSectionSampelWrapper>
            ))}
        </>
    )
}

export default OurServicesListSectionSampel
