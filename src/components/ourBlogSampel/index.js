import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import {
    OurBlogSampelWrapper,
    OurBlogSampelTitle,
    OurBlogSampelSubtitle,
    OurBlogSampelTextArea,
} from "./index.style"

const OurBlogSectionSampel = () => {
    const data = useStaticQuery(graphql`
        query {
            ArticleImage1: file(
                relativePath: { eq: "maroonStudio-articleImage1.png" }
            ) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            ArticleImage2: file(
                relativePath: { eq: "maroonStudio-articleImage2.png" }
            ) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    const ourBlogSampelData = [
        {
            id: 1,
            icon: data.ArticleImage1.childImageSharp.fluid,
            title: "New analysis tools for freelancers in 2024",
            subtitle:
                "Have you ever wondered how to measure your work? Now you don't have to, with the help of free tools tha...",
        },
        {
            id: 2,
            icon: data.ArticleImage2.childImageSharp.fluid,
            title: "How to design while following RWD",
            subtitle:
                "Designing in this way is important because it increases the level of accessibility for users from differen...",
        },
    ]

    return (
        <>
            {ourBlogSampelData.map((article) => (
                <OurBlogSampelWrapper key={article.id}>
                    <Img
                        fluid={article.icon}
                        style={{
                            width: "100%",
                            height: "125px",
                            borderRadius: "5px",
                            mixBlendMode: "luminosity",
                        }}
                    />
                    <OurBlogSampelTextArea>
                        <OurBlogSampelTitle>
                            <u>{article.title}</u>
                        </OurBlogSampelTitle>
                        <OurBlogSampelSubtitle>
                            {article.subtitle}
                        </OurBlogSampelSubtitle>
                    </OurBlogSampelTextArea>
                </OurBlogSampelWrapper>
            ))}
        </>
    )
}

export default OurBlogSectionSampel
