module.exports = {
    siteMetadata: {
      title: `Sarah Chima - Front-End Developer`,
      description: `I am a Front-End Developer from Nigeria.`,
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

      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.app/offline
      // 'gatsby-plugin-offline',
    ],
  }
  