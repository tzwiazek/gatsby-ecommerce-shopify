const activeEnv =
process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
require('dotenv').config({ path: `.env.${activeEnv}` });

module.exports = {
  siteMetadata: {
    title: `Gatsby ecommerce`,
    description: `...`,
    author: `Tomasz Związek`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 90,
          breakpoints: [786, 1024, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `react-device-detect`,
    `gatsby-plugin-stripe`,
    `gatsby-plugin-root-import`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby e-commerce`,
        short_name: `e-commerce`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: "standalone",
        icon: `${__dirname}/src/assets/img/azavo-logo.png`,
        icon_options: {
          purpose: `any maskable`,
        },
        crossOrigin: `use-credentials`
      },
    },
    {
      resolve: '@chec/gatsby-source-chec',
      options: {
        publicKey: process.env.COMMERCEJS_API_KEY,
        downloadImageAssets: true
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ]
}
