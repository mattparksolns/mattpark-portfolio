import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Typography } from '@material-ui/core'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const { markdownRemark: post } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = post

  return (
    <>
      <Helmet title={frontmatter.title} />
      <Typography variant="h1">{frontmatter.title}</Typography>
      <Typography variant="h2">{frontmatter.date}</Typography>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  )
}

export const pageQuery = graphql`
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
`

export default BlogPostTemplate
