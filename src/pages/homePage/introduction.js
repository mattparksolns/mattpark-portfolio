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
    justifyContent: 'space-between'
  },
  description: {
    fontFamily: 'Montserrat',
    fontSize: '3vw',
  },
  left:{
    width: '65vw',
  },
  right: {
    width: '45vw',
  },
}))

const Introduction = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.left} />
      <div className={classes.right}>
        <Typography className={classes.description} variant="h2" gutterBottom>
          Forward Thinker,
          <br />
          Problem Solver,
          <br />
          and Web Tinkerer.
        </Typography>
      </div>
    </div>
  )
}

export default Introduction
