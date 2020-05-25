import { graphql } from "gatsby"
import React from 'react'
import { Typography } from '@material-ui/core'

import SEO from "../features/seo"

const TestPage = ({ data, location }) => {
  // const { markdownRemark: post } = data // data.markdownRemark holds your post data
  // const { frontmatter, html } = post

  return (
    <>
      <SEO pageTitle="TestPage" />
      <Typography variant="h1">Test Page</Typography>
      <Typography variant="h2">
        testing shit..
      </Typography>
    </>
  )
}

export const pageQuery = graphql`
    query TestQuery($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`

export default TestPage
