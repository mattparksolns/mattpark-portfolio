import React from 'react'

import {
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '80vh',
  },
  paper: {
    width: '100%',
    background: 'ghostwhite',
  },
  h1: {
    fontSize: '6vw',
    // width: '30vw',
    fontFamily: 'serif',
  }
}))

const Greeting = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography className={classes.h1} variant="h1" gutterBottom>
          My name is <b>Matt Park.</b> I am from the greater New York area.
        </Typography>
      </Paper>

    </div>
  )
}

export default Greeting