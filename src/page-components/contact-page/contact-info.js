import React from 'react'
import { withStyles, Typography } from '@material-ui/core'
import Link from '../../components/Link'
import {
  GitHub,
  LinkedIn,
  MailOutline,
  PhoneInTalkOutlined,
} from '@material-ui/icons'

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
    fontSize: '6vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16.5vw',
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
  },
  phoneLink: {
    fontSize: '3vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '7.55vw',
    },
    alignItems: 'flex-end',
    // color: theme.text.primary,
    '&:hover': {
      // color: theme.text.hover2,
      '& > svg': {
        // color: theme.text.hover2,
      }
    }
  },
  phoneText: {
    display: 'inline',
    position: 'relative',
    top: -10,
    [theme.breakpoints.down('sm')]: {
      top: -5,
    },
  },
  emailLink: {
    fontSize: '1.6vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '5vw',
    },
    // color: theme.text.primary,
    '&:hover': {
      // color: theme.text.hover2,
      '& > svg': {
        // color: theme.text.hover2,
      }
    }
  },
  emailText: {
    display: 'inline',
    position: 'relative',
    top: -12,
    [theme.breakpoints.down('sm')]: {
      top: -9,
    },
  },
  socialMediaLinks: {
    marginTop: '2vh',
    '& a': {
      marginRight: '1.2vw',
      [theme.breakpoints.down('sm')]: {
        marginRight: '1.5vw',
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
            <PhoneInTalkOutlined fontSize="large" /> <span className={classes.phoneText}>(201) 591 - 3323</span>
          </Link>
          <br/>
          <Link className={classes.emailLink} target="_top" href="mailto:mattparksolutions@gmail.com" underline="none">
            <MailOutline fontSize="large" /> <span className={classes.emailText}>mattparksolutions@gmail.com</span>
          </Link>
        </Typography>
        <Typography className={classes.socialMediaLinks} variant="h2">
          <Link title="GitHub" target="_blank" rel="noopener noreferrer" href="https://github.com/mattparksolutions">
              <GitHub fontSize="large" />
          </Link>
          <Link title="LinkedIn" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/mattparksolutions">
            <LinkedIn fontSize="large" />
          </Link>
        </Typography>
      </div>
    </div>
  )
})
export default ContactInfo
