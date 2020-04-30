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


const Work = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO pageTitle="Work" />
      <div className={classes.root}>
        <Typography variant="h1">My Projects</Typography>
        <Typography variant="h4">
          Under construction..
        </Typography>
      </div>
    </Layout>
  )
}

export default Work