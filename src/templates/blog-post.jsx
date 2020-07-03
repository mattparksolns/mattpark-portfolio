import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Typography } from '@material-ui/core'

const BlogPostTemplate = () => {
    const data = useStaticQuery(graphql`
        query BlogPostByPath($slug: String!) {
            markdownRemark(fields: { slug: { eq: $slug } }) {
                html
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    path
                    title
                }
            }
        }
    `)
    const { markdownRemark: post } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = post

    return (
        <>
            <Helmet title={frontmatter.title} />
            <Typography variant="h1">{frontmatter.title}</Typography>
            <Typography variant="h2">{frontmatter.date}</Typography>
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
        </>
    )
}
BlogPostTemplate.propTypes = {
    data: PropTypes.object.isRequired,
}

export default BlogPostTemplate
