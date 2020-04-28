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
  paper: {
    background: 'None',
    position: 'relative',
  },
  backgroundImage: {
    // position: 'absolute',
    height: '60vh',
  },
  greeting: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '70%',
    fontSize: '5.5vw',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      fontSize: '8vw',
    },
    [theme.breakpoints.down('xs')]: {
      fontsize: '13vw',
    },
    fontFamily: 'Montserrat',
  },
  name: {
    color: 'darkslategray',
    textDecoration: 'none',
  },
  description: {
    // color: 'ghostwhite',
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
      <Paper className={classes.paper}>
        <BackgroundImage className={classes.backgroundImage} />
        <Typography className={classes.greeting} variant="h1" gutterBottom>
          My name is
          <a title="LinkedIn" className={classes.name} href="https://linkedin.com/in/mattparksolutions"><b> Matt Park. </b></a>
          I am from the greater New York area.
        </Typography>
        <Typography className={classes.description} variant="h2" gutterBottom>
          Forward Thinker,
          <br />
          Problem Solver,
          <br />
          and Web Tinkerer.
        </Typography>
      </Paper>
    </div>
  )
}

export default Greeting