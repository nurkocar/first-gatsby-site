module.exports = {
  siteMetadata: {
    title: "Nur Kocar",
    description: "web dev portfolio",
    copyright: "This website is copyright 2021 Web Warrior",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/src/notes/`,
      },
    },
    
  ],
};
