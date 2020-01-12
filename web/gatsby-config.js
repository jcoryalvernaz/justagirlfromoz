// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
})

const clientConfig = require("./client-config")
const token = process.env.SANITY_READ_TOKEN

const isProd = process.env.NODE_ENV === "production"

module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Just a Girl from Oz Photography`,
        short_name: `Just a Girl from Oz`,
        description: `Beautiful photography crafted by an Aussie living in America.`,
        start_url: `/`,
        background_color: `#1a202c`,
        theme_color: `#1d2330`,
        display: `minimal-ui`,
        icon: `src/images/logo-small.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
