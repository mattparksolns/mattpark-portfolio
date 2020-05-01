import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import {
  makeStyles,
  Typography,
} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
  },
  blogPost: {
  },
}))

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const classes = useStyles()
  // const { markdownRemark } = data
  // const { frontmatter, html } = markdownRemark
  const { markdownRemark: post } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = post


  // export const pageQuery = graphql`
  //     query BlogPostByPath($path: String!) {
  //         markdownRemark(frontmatter: { path: { eq: $path } }) {
  //             html
  //             frontmatter {
  //                 date(formatString: "MMMM DD, YYYY")
  //                 path
  //                 title
  //             }
  //         }
  //     }
  // `

  return (
    <div className={classes.root}>
      <Helmet title={frontmatter.title} />
      <div className={classes.blogPost}>
        <Typography variant="h1">{frontmatter.title}</Typography>
        <Typography variant="h2">{frontmatter.date}</Typography>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
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