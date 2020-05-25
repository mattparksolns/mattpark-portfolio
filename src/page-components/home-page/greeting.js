import React from 'react'
import { withStyles, Typography, Link } from '@material-ui/core'

import BackgroundImage from "./background-image"

const Greeting = withStyles((theme) => ({
  root: {
    position: 'relative',
  },
  greeting: {
    // color: theme.colors.text,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '70%',
    fontSize: '5vw',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      fontSize: '7.3vw',
    },
    [theme.breakpoints.down('xs')]: {
      fontsize: '12.5vw',
    },
  },
  myName: {
    fontWeight: 'bold',
    // color: theme.text.hover3,
    '&:hover': {
      // color: theme.text.hover2
    }
  },
  description: {
    // color: theme.colors.text,
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
}))(({ classes }) => {
  return (
    <div className={classes.root}>
      <BackgroundImage />
      <Typography className={classes.greeting} variant="h1" gutterBottom>
        My name is
        <Link className={classes.myName} title="LinkedIn"
              target={"_blank"} rel={"noopener noreferrer"}
              href="https://linkedin.com/in/mattparksolutions"> Matt Park. </Link>
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
})
export default Greeting
