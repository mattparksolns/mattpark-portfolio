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
  container:{
  },
}))


const AboutPage = () => {
  const classes = useStyles()

  return (
    <Layout className={classes.root}>
      <SEO pageTitle="About" />
      <div className={classes.container}>
        <Typography variant="h1">About Me</Typography>
        <Typography variant="h4">
          Under construction..
        </Typography>
      </div>
    </Layout>
  )
}

export default AboutPage