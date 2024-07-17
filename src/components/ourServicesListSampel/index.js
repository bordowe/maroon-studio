import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
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
    // OurServicesListSectionSampelButton,
    OurServicesListSectionTagsWrapper,
    OurServicesListSectionTag,
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
            tags: [
                {
                    id: 1,
                    name: "Landing Page",
                },
                {
                    id: 2,
                    name: "E-commerce",
                },
                {
                    id: 3,
                    name: "Website Application",
                },
                {
                    id: 4,
                    name: "One Page",
                },
                {
                    id: 5,
                    name: "Multi Page",
                },
                {
                    id: 6,
                    name: "Blog",
                },
                {
                    id: 7,
                    name: "WordPress",
                },
            ],
        },
        {
            id: 2,
            icon: data.SeoIcon.childImageSharp.fluid,
            title: "SEO",
            lore: "Boost your visibility on search engines with our expert SEO strategies. We conduct comprehensive keyword research, optimize on-page elements, and build high-quality backlinks to improve your search engine rankings. Our approach is data-driven and tailored to your industry, helping you attract more organic traffic and convert visitors into loyal customers.",
            type: "services",
            buttonText: "Learn more",
            tags: [
                {
                    id: 1,
                    name: "SEO Audit",
                },
                {
                    id: 2,
                    name: "SEO Keywords",
                },
                {
                    id: 3,
                    name: "SEO Optimization",
                },
                {
                    id: 4,
                    name: "Link Building",
                },
                {
                    id: 5,
                    name: "Content Creation",
                },
            ],
        },
        {
            id: 3,
            icon: data.OnlineMarketingIcon.childImageSharp.fluid,
            title: "Online marketing",
            lore: "Our comprehensive online marketing solutions are designed to grow your business by reaching the right audience at the right time. We create and manage targeted advertising campaigns across multiple platforms, including Google Ads, social media, and email marketing. By leveraging advanced analytics and A/B testing, we continuously optimize your campaigns for maximum ROI, ensuring that every marketing dollar is well spent.",
            type: "services",
            buttonText: "Learn more",
            tags: [
                {
                    id: 1,
                    name: "Research & Strategy",
                },
                {
                    id: 2,
                    name: "Ad Creation",
                },
                {
                    id: 3,
                    name: "Social Media Marketing",
                },
                {
                    id: 4,
                    name: "Search Engine Marketing",
                },
            ],
        },
        {
            id: 4,
            icon: data.SocialMediaManagementIcon.childImageSharp.fluid,
            title: "Social Media Management",
            lore: "Effective social media strategies to engage your audience and increase your reach. We handle everything from content creation and scheduling to community management and analytics. Our team crafts compelling posts, stories, and ads that resonate with your target audience, driving engagement and brand loyalty. Stay connected with your customers and build a vibrant online community with our social media management services.",
            type: "services",
            buttonText: "Learn More",
            tags: [
                {
                    id: 1,
                    name: "Social Media Strategy",
                },
                {
                    id: 2,
                    name: "Content Creation & Planning",
                },
                {
                    id: 3,
                    name: "Content Managing & Publishing",
                },
                {
                    id: 4,
                    name: "Monitoring & Analysis",
                },
            ],
        },
    ]

    const [inView, setInView] = useState({})
    const refs = useRef([])

    useEffect(() => {
        refs.current = refs.current.slice(0, realValueSampelData.length)
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView((prev) => ({
                            ...prev,
                            [entry.target.id]: true,
                        }))
                    }
                })
            },
            { threshold: 0.5 }
        )

        refs.current.forEach((ref) => {
            if (ref) observer.observe(ref)
        })

        return () => {
            refs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref)
            })
        }
    }, [realValueSampelData.length])

    return (
        <>
            {realValueSampelData.map((service, index) => (
                <OurServicesListSectionSampelWrapper
                    key={service.id}
                    as={motion.div}
                    id={`section-${index}`}
                    ref={(el) => (refs.current[index] = el)}
                    initial={{
                        x: index % 2 === 0 ? 100 : -100,
                        opacity: 0,
                    }}
                    animate={{
                        x: inView[`section-${index}`]
                            ? 0
                            : index % 2 === 0
                            ? 100
                            : -100,
                        opacity: inView[`section-${index}`] ? 1 : 0,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 20,
                    }}
                    whileHover={{
                        scale: 1.02,
                        y: -10,
                    }}
                    whileTap={{ scale: 1 }}
                >
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
                            <OurServicesListSectionTagsWrapper>
                                {service.tags.map((tag) => (
                                    <OurServicesListSectionTag key={tag.id}>
                                        {tag.name}
                                    </OurServicesListSectionTag>
                                ))}
                            </OurServicesListSectionTagsWrapper>
                            {/* <OurServicesListSectionSampelButton>
                                {service.buttonText}
                            </OurServicesListSectionSampelButton> */}
                        </OurServicesListSectionSampelHeadersTextWrapper>
                    </OurServicesListSectionSampelWholeItems>
                </OurServicesListSectionSampelWrapper>
            ))}
        </>
    )
}

export default OurServicesListSectionSampel
