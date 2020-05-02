import React from 'react'
import {
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core'

import SignatureImage from './signature-image'


const useStyles = makeStyles((theme) => ({
  root: {
  },
  paper: {
    background: 'none',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 5vw',
    marginTop: '10vh',
    paddingTop: '5vh',
    paddingBottom: '15vh',
  },
  message: {
    // color: 'ghostwhite',
    fontFamily: 'Montserrat',
    fontSize: '3vw',
    width: '45vw',
    [theme.breakpoints.up('lg')]: {
      fontSize: '3vw',
      width: '45vw',
    },
    [theme.breakpoints.down('md')]: {
      fontsize: '4vw',
      width: '46vw',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '5vw',
      width: '65vw',
    },
    paddingLeft: '2vw',
    paddingBottom: '10vh',
  },
  contactLink: {
    textDecoration: 'none',
    color: 'darkslategray',
  },
  logoAndSignatureContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '10vw',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
    },
    alignItems: 'flex-start',
  },
  logo: {
    width: '18vw'
  },
  thanksAndSignatureContainer: {
    display: 'flex',
    flexDirection: 'column',
    // marginRight: '10vw',
  },
  thankYouMessage: {
    // color: 'ghostwhite',
    fontFamily: 'Montserrat',
    width: '18vw',
    fontSize: '1.5vw',
    [theme.breakpoints.down('md')]: {
      width: '22vw',
      fontSize: '1.8vw',
    },
    [theme.breakpoints.down('sm')]: {
      width: '26vw',
      fontSize: '2.2vw',
    },
    [theme.breakpoints.down('xs')]: {
      width: '38vw',
      fontSize: '3vw',
    },
  },
  signature: {
    // color: 'ghostwhite',
  },
}))

const Farewell = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography className={classes.message} variant="h2" gutterBottom>
          <a className={classes.contactLink} href="/contact"><i>Drop me a line,</i></a> I'd like to hear from you!
        </Typography>
        <div className={classes.logoAndSignatureContainer}>
          <div className={classes.logo} />
          <div className={classes.thanksAndSignatureContainer}>
            <Typography className={classes.thankYouMessage} variant="caption" gutterBottom>
              <i>Thank you for scrolling all this way!</i>
            </Typography>
            <SignatureImage className={classes.signature} />
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default Farewell