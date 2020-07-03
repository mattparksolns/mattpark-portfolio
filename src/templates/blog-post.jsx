import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Typography } from '@material-ui/core'

import SEO from '../components/seo'

const BlogPostTemplate = ({ data }) => {
    const { markdownRemark: post } = data // data.markdownRemark holds your post data
    const { html, excerpt, frontmatter } = post

    return (
        <>
            <SEO title={frontmatter.title} description={frontmatter.description || excerpt} />
            <article>
                <Typography variant="h1">{frontmatter.title}</Typography>
                <Typography variant="h2">{frontmatter.date}</Typography>
                <section className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
            </article>
        </>
    )
}
BlogPostTemplate.propTypes = {
    data: PropTypes.object.isRequired,
}
export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                path
                date(formatString: "MMMM DD, YYYY")
                description
            }
        }
    }
`
