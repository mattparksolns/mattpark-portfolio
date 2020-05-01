import React from 'react'
import {
  makeStyles,
  Typography,
} from '@material-ui/core'

import Layout from '../layout'
import SEO from "../layout/seo"
import { graphql } from "gatsby"

const useStyles = makeStyles((theme) => ({
  root: {
  },
}))


const TestPage = ({ data }) => {
  const classes = useStyles()
  console.log(data)
  // const { markdownRemark: post } = data // data.markdownRemark holds your post data
  // const { frontmatter, html } = post

  return (
    <Layout>
      <SEO pageTitle="TestPage" />
      <div className={classes.root}>
        <Typography variant="h1">TestPage</Typography>
        <Typography variant="h4">
          testing shit..
        </Typography>
      </div>
    </Layout>
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