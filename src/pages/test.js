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


const Test = ({ data }) => {
  const classes = useStyles()
  console.log(data)
  // const { markdownRemark: post } = data // data.markdownRemark holds your post data
  // const { frontmatter, html } = post

  return (
    <Layout>
      <SEO pageTitle="Test" />
      <div className={classes.root}>
        <Typography variant="h1">Test</Typography>
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

export default Test