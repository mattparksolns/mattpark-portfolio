import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import { withStyles, Box, Typography, Link, SvgIcon } from '@material-ui/core'

import Signature from '../../../static/assets/images/signature.inline.svg'
import { FaLinkedinIn, FiGithub } from "react-icons/all"

const ContactCard = withStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '6.944444vw',
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(6),
    },
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      '& > div': {
        paddingTop: theme.spacing(2),
      },
    },
  },
  message: {
    width: '65%',
    fontSize: '3.5vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
      width: 360,
    },
    '@media only screen and (max-width: 390px)': {
      width: '100%',
      fontSize: '7.5vw',
    },
    '@media only screen and (max-width: 280px)': {
      fontSize: '7vw',
    },
    '& > a': {
      fontStyle: 'italic',
      // color: theme.text.hover2
      '&:hover': {
        // color: theme.text.hover
      }
    }
  },
  letsConnect: {
    textAlign: 'right',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'left',
    },
    '& > p': {
      fontStyle: 'italic',
      fontSize: '1vw',
      [theme.breakpoints.down('md')]: {
        fontSize: 14,
      }
    },
  },
  socials: {
    marginTop: 5,
    '& > a': {
      fontSize: 20,
    },
    '& > a:nth-of-type(1)': {
      marginRight: '1.3888889vw',
      [theme.breakpoints.down('sm')]: {
        marginRight: 20,
      },
    },
  },
  thankyou: {
    margin: '6.944vw 0',
    position: 'relative',
  },
  logo: {
    color: theme.palette.secondary.main,
    height: '12.5vw',
    width: '12.5vw',
    borderRadius: '50%',
    border: '2px solid',
    boxShadow: `0px 0px 5px ${theme.palette.secondary.main}`,
    // textShadow: `0px 0px 10px ${theme.palette.secondary.main}`,
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
      fontFamily: 'tungsten',
      fontWeight: 900,
      whiteSpace: 'nowrap',
      width: '100%',
      height: '100%',
      textAlign: 'center',
      // padding: '0.85vw 2.2vw',
      margin: '0.37vw 0.2vw',
      fontSize: '9.5vw',
      [theme.breakpoints.down('xs')]: {
        // padding: '4px 0 0 3.9px',
        fontSize: 54.144,
      },
      '@media only screen and (max-width: 390px)': {
        // padding: '1.77vw 0 0 0.77vw',
        // marginTop: -3,
        fontSize: '14vw',
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
        fontSize: 14,
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
    <Box className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.message} variant={"h1"}>
          <Link color={"secondary"} component={GatsbyLink} to="/contact/">Drop me a line,</Link> I'd like to hear from you!
        </Typography>
        <div className={classes.letsConnect}>
          <Typography variant={"body1"}>
            Lets connect!
          </Typography>
          <div className={classes.socials}>
            <Link title="GitHub" target="_blank" rel="noopener noreferrer"
                  href="https://github.com/mattparksolutions"><FiGithub /></Link>
            <Link title="LinkedIn" target="_blank" rel="noopener noreferrer"
                  href="https://linkedin.com/in/mattparksolutions"><FaLinkedinIn /></Link>
          </div>
        </div>
      </div>
      <div className={classes.thankyou}>
        <div className={classes.logo}>
          <Typography variant={"h2"}>MP</Typography>
        </div>
        <div className={classes.signature}>
          <Typography variant={"body1"}>
            Thank you for visiting<br />
            my portfolio!
          </Typography>
          <SvgIcon component={Signature} viewBox={"0 0 204.13 35.46"} />
        </div>
      </div>
    </Box>
  )
})
export default ContactCard
