import React from 'react'

import {
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
  },
  paper: {
    background: 'ghostwhite',
  },
  greeting: {
    width: '55vw',
    fontSize: '6vw',
    fontFamily: 'serif',
  }
}))

const Greeting = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography className={classes.greeting} variant="h1" gutterBottom>
          My name is <b>Matt Park.</b> I am Software Engineer from the greater New York area.
        </Typography>
      </Paper>

    </div>
  )
}

export default Greeting