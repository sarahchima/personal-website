module.exports = {
  siteMetadata: {
    title: `Sarah Chima Atuonwu- Software Engineer`,
    description: `Software engineer based in Stockholm, Sweden.`,
    siteUrl: `https://www.gatsbyjs.org`,
    author: `Sarah Chima Atuonwu`,
    defaultImage: `https://res.cloudinary.com/dvj2hbywq/image/upload/v1550930072/potrait.jpg`,
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
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-126807182-1",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
  ],
};
