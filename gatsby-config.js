module.exports = {
  siteMetadata: {
    title: "Bastian, Frontend Designer and Developer",
    titleTemplate: "%s | b-web.ch",
    description: "Frontend Designer and Developer, helping bridging the gap between Marketing and Developers at SCOTT Sports",
    url: "https://b-web.ch",
    image: "/images/b-web-card.png",
    twitterUsername: "@_tian",
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${ __dirname }/src/data`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${ __dirname }/src/blog`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${ __dirname }/src/images`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              withWebp: true,
            }
          }
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `B-WEB`,
        short_name: `B-WEB`,
        start_url: `/?source=pwa`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/b-web-icon.png`,
      },
    },
    'gatsby-plugin-offline'
  ]
}