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
            title: "Strony Internetowe",
            lore: "Nasz zespół projektuje i rozwija niestandardowe, responsywne strony internetowe, które są dostosowane do konkretnych potrzeb Twojej firmy. Niezależnie od tego, czy potrzebujesz eleganckiej, nowoczesnej platformy e-commerce, czy profesjonalnej witryny korporacyjnej, zapewniamy, że Twoja obecność online jest zarówno atrakcyjna wizualnie, jak i wysoce funkcjonalna. Nasze strony internetowe są zoptymalizowane pod kątem wydajności, zapewniając szybkie czasy ładowania i bezproblemowe doświadczenia użytkownika na wszystkich urządzeniach.",
            type: "usługi",
            buttonText: "Dowiedz się więcej",
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
                    name: "Aplikacja Internetowa",
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
            lore: "Zwiększ swoją widoczność w wyszukiwarkach dzięki naszym eksperckim strategiom SEO. Przeprowadzamy kompleksowe badania słów kluczowych, optymalizujemy elementy na stronie i budujemy wysokiej jakości linki zwrotne, aby poprawić pozycję w wyszukiwarkach. Nasze podejście opiera się na danych i jest dostosowane do Twojej branży, pomagając Ci przyciągnąć więcej ruchu organicznego i przekształcić odwiedzających w lojalnych klientów.",
            type: "usługi",
            buttonText: "Dowiedz się więcej",
            tags: [
                {
                    id: 1,
                    name: "Audyt SEO",
                },
                {
                    id: 2,
                    name: "Słowa Kluczowe",
                },
                {
                    id: 3,
                    name: "Optymalizacja SEO",
                },
                {
                    id: 4,
                    name: "Link Building",
                },
                {
                    id: 5,
                    name: "Tworzenie Treści",
                },
            ],
        },
        {
            id: 3,
            icon: data.OnlineMarketingIcon.childImageSharp.fluid,
            title: "Marketing online",
            lore: "Nasze kompleksowe rozwiązania marketingu internetowego są zaprojektowane tak, aby rozwijać Twój biznes poprzez dotarcie do właściwej grupy odbiorców we właściwym czasie. Tworzymy i zarządzamy ukierunkowanymi kampaniami reklamowymi na wielu platformach, w tym Google Ads, mediach społecznościowych i marketingu e-mailowym. Wykorzystując zaawansowaną analitykę i testy A/B, nieustannie optymalizujemy Twoje kampanie w celu uzyskania maksymalnego zwrotu z inwestycji, zapewniając, że każda złotówka marketingowa jest dobrze wydana.",
            type: "usługi",
            buttonText: "Dowiedz się więcej",
            tags: [
                {
                    id: 1,
                    name: "Badania i Strategia",
                },
                {
                    id: 2,
                    name: "Tworzenie Treści",
                },
                {
                    id: 3,
                    name: "Marketing Mediów Społecznościowych",
                },
                {
                    id: 4,
                    name: "Marketing w Wyszukiwarkach",
                },
            ],
        },
        {
            id: 4,
            icon: data.SocialMediaManagementIcon.childImageSharp.fluid,
            title: "Zarządzanie Mediami Społecznościowymi",
            lore: "Skuteczne strategie mediów społecznościowych, które angażują odbiorców i zwiększają zasięg. Zajmujemy się wszystkim, od tworzenia treści i planowania po zarządzanie społecznością i analizę. Nasz zespół tworzy przekonujące posty, historie i reklamy, które znajdują oddźwięk u odbiorców docelowych, zwiększając zaangażowanie i lojalność wobec marki. Pozostań w kontakcie ze swoimi klientami i buduj dynamiczną społeczność online dzięki naszym usługom zarządzania mediami społecznościowymi.",
            type: "usługi",
            buttonText: "Dowiedz się więcej",
            tags: [
                {
                    id: 1,
                    name: "Strategia Mediów Społecznościowych",
                },
                {
                    id: 2,
                    name: "Tworzenie i Planowanie Treści",
                },
                {
                    id: 3,
                    name: "Zarządzanie Treścią i Publikowanie",
                },
                {
                    id: 4,
                    name: "Monitorowanie i Analiza",
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
