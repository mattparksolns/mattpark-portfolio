import React from 'react'
import { Typography } from '@material-ui/core'

import SEO from '../seo'

const BlogPage = ({ data, location }) => {
  // const classes = useStyles()
  return (
    <>
      <SEO pageTitle="Blog" />
      <Typography variant="h1">My Blog</Typography>
      <Typography variant="h2">
        Under construction..
      </Typography>
    </>
  )
}

export default BlogPage
