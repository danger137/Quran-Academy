require("dotenv").config({
  path: `..env.local`,
})


module.exports = {
    siteMetadata: {
      title: `Gatsby E-commerce Starter`,
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-stripe`,
        options: {
          objects: ["Price"],
          secretKey: process.env.STRIPE_SECRET_KEY,
          downloadFiles: false,
        },
      },
    ],
  }


