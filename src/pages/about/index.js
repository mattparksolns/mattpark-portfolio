import React from 'react'
import {
  makeStyles,
  Typography,
} from '@material-ui/core'

import Layout from '../../layout'

const useStyles = makeStyles((theme) => ({
  root: {
  },
  titleContainer: {
    marginBottom: '5vh',
  },
  aboutContainer: {
    marginBottom: '7vh',
  },
}))


const About = () => {
  const classes = useStyles()

  return (
    <Layout>
      <div className={classes.root}>
        <div className={classes.titleContainer}>
          <Typography variant="h1">About Me</Typography>
        </div>
        <div className={classes.aboutContainer}>
          <Typography variant="h4">
            Under construction..
          </Typography>
        </div>
      </div>
    </Layout>
  )
}

export default About