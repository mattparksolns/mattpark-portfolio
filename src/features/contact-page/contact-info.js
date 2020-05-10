import React from 'react'
import {
  withStyles,
  Typography,
  Link,
} from '@material-ui/core'
import {
  GitHub,
  LinkedIn,
  MailOutline,
  PhoneInTalkOutlined,
} from '@material-ui/icons'


const ContactInfo = withStyles((theme) => ({
  root: {
    // border: '1px solid black',
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
    fontSize: '7vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18vw',
    },
  },
  myInfo: {
    marginBottom: '5vh',
    [theme.breakpoints.down('sm')]: {
      marginTop: '5vh',
    },
    display: 'flex',
    flexDirection: 'column',
    '& a': {
      color: 'black',
      '&:hover': {
        color: 'gray',
      }
    },
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      backgroundColor: 'transparent',
    }
  },
  phoneLink: {
    fontSize: '3vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '7.55vw',
    },
    alignItems: 'flex-end',
  },
  emailLink: {
    fontSize: '1.97vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '5vw',
    },
  },
  icon: {
    height: '30px',
    width: '30px',
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
        <Typography>
          <Link className={classes.phoneLink} target="_top" href="tel:+1201-591-3323" underline="none">
            <PhoneInTalkOutlined className={classes.icon} /> (201) 591 - 3323
          </Link>
          <br/>
          <Link className={classes.emailLink} target="_top" href="mailto:mattparksolutions@gmail.com" underline="none">
            <MailOutline className={classes.icon} /> mattparksolutions@gmail.com
          </Link>
        </Typography>
        <Typography className={classes.socialMediaLinks}>
          <Link title="GitHub" target="_blank" rel="noopener noreferrer" href="https://github.com/mattparksolutions">
              <GitHub className={classes.icon} />
          </Link>
          <Link title= "LinkedIn" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/mattparksolutions">
            <LinkedIn className={classes.icon} />
          </Link>
        </Typography>
      </div>
    </div>
  )
})
export default ContactInfo
