/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
module.exports = {
  siteMetadata: {
    title: `React, Gatsby, Jest, TypeScript, Apollo - Starter.`,
    description: `This starter is a ready-made configuration that includes Gatsby, React, Redux, Apollo, GraphQL, TypeScript, Styled-Components, Material-UI, Jest, Enzyme.`,
    author: `Eduard Kirilov <ph0en1x.free@ya.ru>`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-top-layout`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-ts-apollo-starter.`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    {
       resolve: 'gatsby-plugin-offline',
       options: {
          workboxConfig: {
             globPatterns: ['**/*'],
          }
       },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "components": "src/components",
          "compose": "src/compose",
          "gql": "src/gql",
          "images": "src/images",
          "pages": "src/pages",
          "stores": "src/stores",
          "styles": "src/styles",
          "utils": "src/utils",
        },
        extensions: [
          "js",
        ],
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: `gatsby-plugin-material-ui`,
    },
  ],
}
