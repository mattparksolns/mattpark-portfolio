import React from 'react'
import { withStyles, Link, Typography } from '@material-ui/core'
import SignatureImage from "../page-components/home-page/signature-image";

const Footer = withStyles((theme) => ({
  root: {
    // margin: '0 -20px',
    [theme.breakpoints.up('md')]: {
      margin: props => props.location.pathname === '/' ? '0 5vw' : 0,
    },
  },
  footerHr: {
    // backgroundColor: theme.colors.footerHr,
    height: 2,
    marginBottom: 10,
  },
  lineBreak: {
    display: 'block',
    marginBottom: -8,
  }
}))(({ classes }) => {
  return (
    <footer className={classes.root}>
      {/*<Typography className={classes.message} variant="h2" gutterBottom>*/}
      {/*  <Link className={classes.contactLink} to="/contact"><i>Drop me a line,</i></Link> I'd like to hear from you!*/}
      {/*</Typography>*/}
      {/*<div className={classes.logoAndSignatureContainer}>*/}
      {/*  <div className={classes.logo} />*/}
      {/*  <div className={classes.thanksAndSignatureContainer}>*/}
      {/*    <Typography className={classes.thankYouMessage} component="p" gutterBottom>*/}
      {/*      <i>Thank you for scrolling all this way!</i>*/}
      {/*    </Typography>*/}
      {/*    <SignatureImage />*/}
      {/*  </div>*/}
      {/*</div>*/}
      <hr className={classes.footerHr} />
      <Typography variant="caption">
        © {new Date().getFullYear()} Matt Park
      <span className={classes.lineBreak} />
        All rights reserved
      </Typography>
    </footer>
  )
})
export default Footer
