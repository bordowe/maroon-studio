/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Maroon Studio`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        "gatsby-plugin-styled-components",
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-mdx",
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: ["G-CEQLH3SY3D"],
                pluginConfig: {
                    head: true,
                },
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
    ],
}
