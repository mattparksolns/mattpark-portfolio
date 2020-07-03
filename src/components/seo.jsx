import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

// type MetaItem = {
//     name: string
//     content: string
// }
// type SEOProps = {
//     pageTitle?: string
//     description?: string
//     lang?: string
//     meta?: MetaItem[]
//     canonical?: string
// }

const SEO = ({ pageTitle, description, lang = 'en', meta = [], canonical }) => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    siteUrl
                    description
                    author {
                        name
                    }
                }
            }
        }
    `)

    const metaDescription = description || site.siteMetadata.description

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={site.siteMetadata.title}
            titleTemplate={pageTitle ? `${pageTitle} | %s` : `%s`}
            // TODO: try with &&
            link={canonical ? [{ rel: 'canonical', key: canonical, href: canonical }] : []}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    name: `og:title`,
                    content: site.siteMetadata.title,
                },
                {
                    name: `og:description`,
                    content: metaDescription,
                },
                {
                    name: `og:type`,
                    content: `website`,
                },
                {
                    name: `og:locale`,
                    content: `en_US`,
                },
                {
                    name: `og:url`,
                    content: site.siteMetadata.siteUrl,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author.name,
                },
                {
                    name: `twitter:title`,
                    content: site.siteMetadata.title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ].concat(meta)}
        />
    )
}
SEO.propTypes = {
    pageTitle: PropTypes.string,
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.array,
    canonical: PropTypes.string,
}
export default SEO
