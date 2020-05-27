import React from 'react'
import { withStyles, Typography } from '@material-ui/core'
import Link from '../../components/Link'
import { FiPhoneCall, RiMailSendLine, FiGithub, FaLinkedinIn } from 'react-icons/all'

const ContactInfo = withStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '45%',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
      width: '100%',
    }
  },
  myName: {
    whiteSpace: 'nowrap',
    fontSize: '7vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18vw',
    },
    '@media only screen and (max-width: 360px)': {
      fontSize: '17vw'
    },
  },
  myInfo: {
    marginBottom: '5vh',
    [theme.breakpoints.down('sm')]: {
      marginTop: '20vh',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '5vh',
    },
    display: 'flex',
    flexDirection: 'column',
    '& svg': {
      fontSize: '4vw',
      [theme.breakpoints.down('sm')]: {
        fontSize: '8vw',
      },
      '@media only screen and (max-width: 360px)': {
        fontSize: 28,
      }
    },
    '& > h2:first-child': {
      display: 'flex',
      flexDirection: 'column',
      '& > a': {
        whiteSpace: 'nowrap',
        marginTop: '3vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        '& > span': {
          marginLeft: '1.5vw',
        },
      }
    }
  },
  phoneLink: {
    fontSize: '4vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '10.5vw',
    },
    '@media only screen and (max-width: 360px)': {
      fontSize: '9vw'
    },
  },
  emailLink: {
    fontSize: '1.83vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '5vw',
    },
    '@media only screen and (max-width: 350px)': {
      fontSize: '4.5vw',
    },
  },
  socials: {
    marginTop: '4vh',
    '& a': {
      fontSize: 40,
      marginRight: '2vw',
      [theme.breakpoints.down('xs')]: {
        marginRight: '4vw',
      },
    },
  },
}))(({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography className={classes.myName} variant="h1">
        Matt Park
      </Typography>
      <div className={classes.myInfo}>
        <Typography variant="h2">
          <Link className={classes.phoneLink} target="_top" href="tel:+1201-591-3323" underline="none">
            <FiPhoneCall /><span>(201) 591 - 3323</span>
          </Link>
          {/*<br/>*/}
          <Link className={classes.emailLink} target="_top" href="mailto:mattparksolutions@gmail.com" underline="none">
            <RiMailSendLine /><span className={classes.emailText}>mattparksolutions@gmail.com</span>
          </Link>
        </Typography>
        <Typography className={classes.socials} variant="h2">
          <Link title="GitHub" target="_blank" rel="noopener noreferrer"
                href="https://github.com/mattparksolutions"><FiGithub /></Link>
          <Link title="LinkedIn" target="_blank" rel="noopener noreferrer"
                href="https://linkedin.com/in/mattparksolutions"><FaLinkedinIn /></Link>
        </Typography>
      </div>
    </div>
  )
})
export default ContactInfo
