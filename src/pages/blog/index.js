import React from 'react'
import {
  makeStyles,
  Typography,
} from '@material-ui/core'

import Layout from '../../layout'
import SEO from "../../layout/seo"

const useStyles = makeStyles((theme) => ({
  root: {
  },
}))


const Blog = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO pageTitle="Blog" />
      <div className={classes.root}>
        <Typography variant="h1">My Blog</Typography>
        <Typography variant="h4">Under construction..</Typography>
      </div>
    </Layout>
  )
}

export default Blog