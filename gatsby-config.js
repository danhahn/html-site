module.exports = {
  siteMetadata: {
    contact: {
      name: "Dan Hahn",
      email: "dan@svahtml.com"
    },
    title: `SVA HTML`,
    semester: `Summer`,
    startDate: `2018-06-06`,
    lessons: 8,
    noClass: [4],
    classFiles:
      "https://drive.google.com/drive/folders/1uf3MIQgjbWCtj2GHcjcF0sEITRvOpAt1?usp=sharing",
    siteTitle: `Coding HTML and CSS - Basic`,
    signUpLink: ``
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-images`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
              fonts: [
                `Roboto Mono`
              ]
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {}
            }
          },
          {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              trackingId: "UA-187360-2",
              // Puts tracking script in the head instead of the body
              head: false,
              // Setting this parameter is optional
              anonymize: true,
              // Setting this parameter is also optional
              respectDNT: true,
              // Avoids sending pageview hits from custom paths
              exclude: ["/files/**"]
            }
          },
          {
            resolve: `gatsby-plugin-favicon`,
            options: {
              logo: "./src/favicon.png",
              injectHTML: true,
              icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: false,
                favicons: true,
                firefox: true,
                twitter: false,
                yandex: false,
                windows: false
              }
            }
          }
        ]
      }
    }
  ]
};
