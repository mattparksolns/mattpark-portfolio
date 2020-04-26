import React from 'react'
import {
  makeStyles,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    // border: '1px solid black',
    textAlign: 'right',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
      textAlign: 'left',
    },
  },
  description: {
    fontFamily: 'Montserrat',
    fontSize: '3vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '4vw',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '5vw',
    },
  },
}))

const Introduction = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
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

export default Introduction
