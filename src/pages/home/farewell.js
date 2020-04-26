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
    margin: '0 5vw',
    paddingTop: '5vh',
    paddingBottom: '5vh',
  },
  message: {
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
    color: 'darkgray',
  },
  logoAndSignatureContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  logo: {
    height: '40vh'
  },
  thanksAndSignatureContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '10vw',
  },
  thankYouMessage: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    width: '12vw',
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
          <a className={classes.contactLink} href="/contact"><i>Drop me a line,</i></a> I'd like to hear from you!
        </Typography>
        <div className={classes.logoAndSignatureContainer}>
          <div className={classes.logo} />
          <div className={classes.thanksAndSignatureContainer}>
            <Typography className={classes.thankYouMessage} variant="subtitle1" gutterBottom>
              <i>Thank you for scrolling all this way!</i>
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