import React from 'react'
import {
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    background: 'lightgray',
  },
  paper: {
  },
  message: {
  },
  thankYouMessage: {
  },
  signature: {
  },
}))

const Farewell = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography className={classes.message} variant="h2" gutterBottom>
          Drop me a line, I'd like to hear from you!
        </Typography>
        <Typography className={classes.thankYouMessage} variant="caption" gutterBottom>
          Thank you for scrolling all this way!
        </Typography>
        <Typography className={classes.signature} variant="h3" gutterBottom>
          -- Signature --
        </Typography>
      </Paper>
    </div>
  )
}

export default Farewell