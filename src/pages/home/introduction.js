import React from 'react'
import {
  makeStyles,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
  },
  h2: {
  },
}))

const Introduction = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography className={classes.h2} variant="h2" gutterBottom>
        I am a Forward Thinker, Problem Solver and Web Tinkerer.
      </Typography>
    </div>
  )
}

export default Introduction
