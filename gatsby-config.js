const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

console.log(`Using environment config: '${activeEnv}'`)

require('dotenv').config({
    path: `.env.${activeEnv}`,
})

module.exports = {
    siteMetadata: {
        title: `Matt Park - Software Engineer`,
        description: `My name is Matt Park. I'm a New York City based software engineer.`,
        siteUrl: `https://mattpark.tk/`,
        author: {
            name: `Matt Park`,
            username: `mattparksolns`,
            email: `mattparksolns@gmail.com`,
            phone: `+1 (201) 591 - 3323`,
            socials: {
                reddit: { username: `mattparksolns`, link: `` },
                facebook: { username: `mattparksolns`, link: `https://www.facebook.com/mattparksolns` },
                instagram: { username: `mattparksolns`, link: `https://www.instagram.com/mattparksolns/` },
                twitter: { username: `mattparksolns`, link: `https://twitter.com/mattparksolns` },
                quora: { username: `mattparksolns`, link: `` },
                tumblr: { username: `mattparksolns`, link: `` },
                medium: { username: `mattparksolns`, link: `` },
                ycombinator: { username: `mattparksolns`, link: `` },
                linkedin: { username: `mattparksolns`, link: `https://www.linkedin.com/in/mattparksolns/` },
                apollo: { username: `mattparksolns`, link: `` },
                github: { username: `mattparksolns`, link: `https://github.com/mattparksolns` },
                atlassian: { username: `mattparksolns`, link: `` },
                docker: { username: `mattparksolns`, link: `` },
                stackOverflow: { username: `mattparksolns`, link: `` },
                wordpress: { username: `mattparksolns`, link: `` },
                codepen: { username: `mattparksolns`, link: `` },
                pinterest: { username: `mattparksolns`, link: `` },
            },
        },
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `mattpark-portfolio`,
                short_name: `mattpark`,
                description: `My name is Matt Park. I'm a New York City based software engineer.`,
                lang: `en`,
                display: `standalone`,
                icon: `static/assets/icons/mattpark-favicon.png`,
                start_url: `/`,
                background_color: `#111111`,
                theme_color: `#ff0049`,
                theme_color_in_head: false,
                cache_busting_mode: `none`,
                crossOrigin: `use-credentials`, // `use-credentials` or `anonymous`
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
                host: `https://mattpark.tk`,
                sitemap: `https://mattpark.tk/sitemap.xml`,
                env: {
                    development: {
                        policy: [{ userAgent: '*', disallow: ['/'] }],
                    },
                    production: {
                        policy: [{ userAgent: '*', allow: ['/'] }],
                    },
                    // Netlify Settings (look up gatsby-plugin-robots-txt)
                    'branch-deploy': {
                        policy: [{ userAgent: '*', disallow: ['/'] }],
                        sitemap: undefined,
                        host: undefined,
                    },
                    'deploy-preview': {
                        policy: [{ userAgent: '*', disallow: ['/'] }],
                        sitemap: undefined,
                        host: undefined,
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
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // TODO: correct this
                trackingId: `UA-165323903-1`,
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-react-helmet-canonical-urls`,
            options: {
                siteUrl: `https://mattpark.tk`,
                noQueryString: true,
            },
        },
        {
            resolve: `gatsby-plugin-csp`,
            options: {
                disableOnDev: true,
                mergeDefaultDirectives: true,
                directives: {
                    'script-src': "'self' www.google-analytics.com",
                    'style-src': "'self' 'unsafe-inline'",
                    'img-src': "'self' data: www.google-analytics.com",
                },
            },
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
            },
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
            },
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {},
        },
        {
            resolve: `gatsby-plugin-material-ui`,
            options: {
                // stylesProvider: {
                //   injectFirst: true,
                // }
            },
        },
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/layouts/index.jsx`),
            },
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
                                    custom_elements: [
                                        {
                                            'content:encoded': edge.node.html,
                                        },
                                    ],
                                })
                            })
                        },
                        query: `
                            {
                                allMarkdownRemark( sort: { order: DESC, fields: [frontmatter___date] }, ) {
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
                        output: '/rss.xml',
                        title: "Your Site's RSS Feed",
                        // optional configuration to insert feed reference in pages:
                        // if `string` is used, it will be used to create RegExp and then test if pathname of
                        // current page satisfied this regular expression;
                        // if not provided or `undefined`, all pages will have feed reference inserted
                        match: '^/blog/',
                        // optional configuration to specify external rss feed, such as feedburner
                        link: 'https://feeds.feedburner.com/gatsby/blog',
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-react-svg`,
            options: {
                // rule: {
                //   include: /\.inline\.svg$/,
                // },
            },
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
                // timeToRead: (wordCount, html, rawMD) => wordCount / 42,
                timeToRead: wordCount => wordCount / 42,
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
                            dashes: 'oldschool',
                        },
                    },
                ],
            },
        },
    ],
}
