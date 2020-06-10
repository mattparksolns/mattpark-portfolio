module.exports = {
  siteMetadata: {
    title: `Matt Park - Software Engineer`,
    author: {
      name: `Matt Park`,
      username: `@mattparksolns`,
      summary: `Web Tinkerer`,
    },
    description: `My name is Matt Park. I'm a New York City based software engineer.`,
    siteUrl: `https://mattpark.now.sh/`,
    social: {
      reddit: `mattparksolns`,
      facebook: `mattparksolns`,
      instagram: `mattparksolns`,
      twitter: `@mattparksolns`,
      quora: `mattparksolns`,
      tumblr: `mattparksolns`,
      medium: `mattparksolns`,
      ycombinator: `mattparksolns`,
      linkedin: `mattparksolns`,
      apollo: `mattparksolns`,
      github: `mattparksolns`,
      atlassian: `mattparksolns`,
      docker: `mattparksolns`,
      stackOverflow: `mattparksolns`,
      wordpress: `mattparksolns`,
      codepen: `mattparksolns`,
      pinterest: `mattparksolns`,
      email: `mattparksolns@gmail.com`,
      phone: `+1 (201) 591 - 3323`,
    },
    socialLinks: {
      twitter: ``,
      linkedin: ``,
      github: ``,
    }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Matt Park Portfolio`,
        short_name: `mattpark`,
        start_url: `/`,
        background_color: `#121317`,
        theme_color: `#121317`,
        display: `minimal-ui`,
        icon: `static/assets/images/mattpark-favicon.png`,
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/admin`],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        // host: `https://mattpark.now.sh`,
        // sitemap: `https://mattpark.now.sh/sitemap.xml`,
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          },
          // Netlify Settings (look up gatsby-plugin-robots-txt)
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: ['**/*'],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://mattpark.now.sh`,
        noQueryString: true,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/assets/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-catch-links`,
      options: {
        excludePattern: /(excluded-link|external)/,
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // }
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layout`)
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Your Site's RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/blog/",
            // optional configuration to specify external rss feed, such as feedburner
            link: "https://feeds.feedburner.com/gatsby/blog",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        timeToRead: (wordCount, html, rawMD) => wordCount / 42,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1200,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-smartypants`,
            options: {
              dashes: "oldschool",
            }
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-165323903-1`,
      },
    },
  ],
}
