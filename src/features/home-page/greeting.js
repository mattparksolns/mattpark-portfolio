import React from 'react'
import {
  makeStyles,
  Typography,
} from '@material-ui/core'

import BackgroundImage from "./background-image"


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  backgroundImage: {
    // position: 'absolute',
    height: '60vh',
  },
  greeting: {
    color: theme.colors.text,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '70%',
    fontSize: '5vw',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      fontSize: '7.5vw',
    },
    [theme.breakpoints.down('xs')]: {
      fontsize: '12.5vw',
    },
    fontFamily: 'Montserrat',
  },
  name: {
    color: theme.colors.myName,
    textDecoration: 'none',
  },
  description: {
    color: theme.colors.text,
    fontFamily: 'Montserrat',
    textAlign: 'right',
    fontSize: '3vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '4vw',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '5vw',
      textAlign: 'left',
    },
  },
}))

const Greeting = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <BackgroundImage className={classes.backgroundImage} />
      <Typography className={classes.greeting} variant="h1" gutterBottom>
        My name is
        <b>
          <a className={classes.name} title="LinkedIn"
            href="https://linkedin.com/in/mattparksolutions"> Matt Park. </a>
        </b>
        I am from the greater New York area.
      </Typography>
      <Typography className={classes.description} variant="h2" gutterBottom>
        Forward Thinker,
        <br />
        Problem Solver,
        <br />
        and Web Tinkerer.
      </Typography>
    </div>
  )
}

export default Greeting
