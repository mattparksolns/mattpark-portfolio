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
    display: 'flex',
    flexDirection: 'column',
  },
  message: {
    width: '60vw',
  },
  contactLink: {
    textDecoration: 'none',
    color: '#404040',
  },
  logoAndSignatureContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
  },
  thanksAndSignatureContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  thankYouMessage: {
    width: '18vw',
    marginRight: '8vw',
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
          <a className={classes.contactLink} href="/contact">Drop me a line,</a> I'd like to hear from you!
        </Typography>
        <div className={classes.logoAndSignatureContainer}>
          <div className={classes.logo} />
          <div className={classes.thanksAndSignatureContainer}>
            <Typography className={classes.thankYouMessage} variant="subtitle1" gutterBottom>
              Thank you for scrolling all this way!
            </Typography>
            <Typography className={classes.signature} variant="h4" gutterBottom>
              -- Matt Park --
            </Typography>
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default Farewell