module.exports = {
    siteMetadata: {
      title: `Sarah Chima`,
      description: `Front-End Developer and Technical Writer from Nigeria.`,
      siteUrl: `https://www.gatsbyjs.org`,
      author: `Sarah Chima`,
    },
    plugins: [
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `src`,
            path: `${__dirname}/src/`,
          },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-react-helmet`,
        {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
            trackingId: "UA-126807182-1",
          },
        },
    ],
  }
  