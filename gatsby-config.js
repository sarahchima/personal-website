module.exports = {
    siteMetadata: {
      title: `Sarah Chima - Front-End Developer`,
      description: `Front-End Developer and Technical Writer from Nigeria.`,
      siteUrl: `https://www.gatsbyjs.org`,
      author: `Sarah Chima`,
      defaultImage: `https://res.cloudinary.com/dvj2hbywq/image/upload/v1550930072/potrait.jpg`
    },
    plugins: [
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `src`,
            path: `${__dirname}/src/`,
          },
        },
        `gatsby-plugin-react-helmet`,
        {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
            trackingId: "UA-126807182-1",
          },
        },
        {
          resolve: `gatsby-transformer-remark`,
          options: {
            plugins: [{
              resolve: `gatsby-remark-prismjs`,
              options: {
                classPrefix: "language-",
                inlineCodeMarker: null,
                aliases: {},
                showLineNumbers: false,
                noInlineHighlight: false,
              },
            }],
          },
        },
    ],
  }
  