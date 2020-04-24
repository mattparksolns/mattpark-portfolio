import React from 'react'
import {
  makeStyles,
  Typography,
} from '@material-ui/core'

import Layout from '../../layout'

const useStyles = makeStyles((theme) => ({
  root: {
  },
}))


const Blog = () => {
  const classes = useStyles()

  return (
    <Layout>
      <div className={classes.root}>
        <Typography variant="h1">My Blog</Typography>
        <Typography variant="caption">This is the blog section.</Typography>
      </div>
    </Layout>
  )
}

export default Blog