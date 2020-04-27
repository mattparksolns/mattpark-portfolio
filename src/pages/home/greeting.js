import React from 'react'

import {
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core'
import BackgroundImage from "./backgroundImage"


const useStyles = makeStyles((theme) => ({
  root: {
  },
  backgroundImage: {
    position: 'absolute',
    top: '10vh',
  },
  paper: {
    background: 'none',
    position: 'relative',
  },
  greeting: {
    position: 'absolute',
    top: 0,
    left: 0,
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
    color: 'gray',
    textDecoration: 'none',
  }
}))

const Greeting = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <BackgroundImage className={classes.backgroundImage} />
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