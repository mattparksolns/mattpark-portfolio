import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import { withStyles, Typography, Link, SvgIcon } from '@material-ui/core'

import Signature from '../../../static/assets/images/signature.inline.svg'

const ContactCard = withStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  message: {
    width: '60%',
    fontSize: '3vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
      width: 350,
    },
    '@media only screen and (max-width: 390px)': {
      width: '100%',
      fontSize: '7vw',
    },
    '@media only screen and (max-width: 260px)': {
      fontSize: '6.62vw',
    },
    '& > a': {
      fontStyle: 'italic',
      // color: theme.text.hover2
      '&:hover': {
        // color: theme.text.hover
      }
    }
  },
  thankyou: {
    margin: '6.944vw 0',
    position: 'relative',
  },
  logo: {
    color: theme.palette.text.logo,
    height: '12.5vw',
    width: '12.5vw',
    borderRadius: '50%',
    border: `2px solid ${theme.palette.text.logo}`,
    position: 'relative',
    overflow: 'hidden',
    margin: '0 auto',
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      height: 75,
      width: 75,
    },
    '@media only screen and (max-width: 390px)': {
      height: '19.2307vw',
      width: '19.2307vw',
    },
    '& > h2': {
      whiteSpace: 'nowrap',
      marginTop: '2.55vw',
      marginLeft: '0.65vw',
      fontSize: '6.5vw',
      [theme.breakpoints.down('xs')]: {
        marginTop: 16.2,
        fontSize: 37.5,
      },
      '@media only screen and (max-width: 390px)': {
        marginTop: '3.6vw',
        fontSize: '9.511535vw',
      },
    }
  },
  signature: {
    position: 'absolute',
    top: '20%',
    left: 'calc(50% + 9.027777vw)',
    height: 'auto',
    width: '24vw',
    [theme.breakpoints.down('xs')]: {
      width: 150,
      left: 100
    },
    '@media only screen and (max-width: 390px)': {
      left: '25.5vw',
    },
    '& > p': {
      marginBottom: '1vw',
      fontStyle: 'italic',
      fontSize: '1vw',
      [theme.breakpoints.down('md')]: {
        fontSize: 12
      },
      '@media only screen and (max-width: 390px)': {
        fontSize: '3.1vw',
      },
    },
    '& > svg': {
      marginLeft: '2.08333vw',
      width: '20vw',
      height: 'auto',
      [theme.breakpoints.down('xs')]: {
        width: 120,
      },
      '@media only screen and (max-width: 390px)': {
        width: '31vw',
      },
    }
  },
}))(({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography className={classes.message} variant="h1">
        <Link color={"secondary"} component={GatsbyLink} to="/contact/">Drop me a line,</Link> I'd like to hear from you!
      </Typography>
      <div className={classes.thankyou}>
        <div className={classes.logo}>
          <Typography variant={"h2"}>MP</Typography>
        </div>
        <div className={classes.signature}>
          <Typography variant="body2">
            Thank you for scrolling<br />
            through my website!
          </Typography>
          <SvgIcon component={Signature} viewBox={"0 0 204.13 35.46"} />
        </div>
      </div>
    </div>
  )
})
export default ContactCard
