require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteUrl: "http://stephrinehart.com",
    title: "Stephanie Rinehart - Librarian & Web Developer",
    description:
      "I'm Stephanie, a librarian and web developer.",
    image: "/images/stephanie.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@heyrinehart",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
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
  ],
};
