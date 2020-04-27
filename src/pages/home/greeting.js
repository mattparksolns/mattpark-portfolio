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
    background: 'none',
  },
  greeting: {
    width: '70%',
    fontSize: '6vw',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      fontSize: '8vw',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      fontsize: '10vw',
    },
    fontFamily: 'Montserrat',
  },
  name: {
    // color: 'crimson',
    color: '#484848',
    textDecoration: 'none',
  }
}))

const Greeting = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>

      <Paper className={classes.paper}>
        <Typography className={classes.greeting} variant="h1" gutterBottom>
          My name is
          <a title="LinkedIn" className={classes.name} href="https://linkedin.com/in/mattparksolutions"><b> Matt Park. </b></a>
          I am from the greater New York area.
        </Typography>
      </Paper>

    </div>
  )
}

export default Greeting