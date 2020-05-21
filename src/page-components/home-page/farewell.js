import { Link } from 'gatsby'
import React from 'react'
import { withStyles, Typography } from '@material-ui/core'

import SignatureImage from './signature-image'

const Farewell = withStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: '10vh 5vw 0',
    [theme.breakpoints.down('sm')]: {
      margin: '10vh 0 0',
    },
    paddingBottom: '5vh',
  },
  message: {
    // color: 'ghostwhite',
    fontSize: '3.5vw',
    width: '45vw',
    [theme.breakpoints.down('md')]: {
      fontsize: '5vw',
      width: '46vw',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '3.5vw',
      width: '44vw',
    },
  },
  contactLink: {
    // color: theme.text.hover2,
    '&:hover': {
      // color: theme.text.hover,
    },
  },
  logoAndSignatureContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '8vh',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
    },
  },
  logo: {
    width: '20vw'
  },
  thanksAndSignatureContainer: {
    display: 'flex',
    flexDirection: 'column',
    // marginRight:
  },
  thankYouMessage: {
    // color: 'ghostwhite',
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
}))(({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography className={classes.message} variant="h2" gutterBottom>
        <Link className={classes.contactLink} to="/contact"><i>Drop me a line,</i></Link> I'd like to hear from you!
      </Typography>
      <div className={classes.logoAndSignatureContainer}>
        <div className={classes.logo} />
        <div className={classes.thanksAndSignatureContainer}>
          <Typography className={classes.thankYouMessage} component="p" gutterBottom>
            <i>Thank you for scrolling all this way!</i>
          </Typography>
          <SignatureImage />
        </div>
      </div>
    </div>
  )
})
export default Farewell
