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
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        // printRejected: true, // Print removed selectors and processed file names
        develop: true
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, 'avif'],
          placeholder: `dominantColor`,
          quality: 90,
          breakpoints: [786, 1024, 1920],
          backgroundColor: `transparent`
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `react-device-detect`,
    // `gatsby-plugin-stripe`,
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
        icon: `${__dirname}/src/assets/img/azavo-logo.webp`,
        icon_options: {
          purpose: `any maskable`,
        },
        crossOrigin: `use-credentials`
      },
    },
    `gatsby-plugin-csp`,
    {
      resolve: '@chec/gatsby-source-chec',
      options: {
        publicKey: process.env.COMMERCEJS_API_KEY,
        downloadImageAssets: true
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-brotli`,
      options: {
        extensions: ['css', 'html', 'js', 'svg']
      }
    }
  ]
}
