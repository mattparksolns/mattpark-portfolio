import React from 'react'
import {
  makeStyles,
  Typography,
  IconButton,
} from '@material-ui/core'
import {
  GitHub,
  LinkedIn,
  Email,
  PhoneInTalk,
} from '@material-ui/icons'


const useStyles = makeStyles((theme) => ({
  root: {
    // border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    }
  },
  container: {
  },
  myName: {
    marginBottom: '9vh',
    fontSize: '8.2vw',
    [theme.breakpoints.down('md')]: {
      fontSize: '14vw',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '18vw',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '19vw',
    }
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      // fontColor: 'gray',
      backgroundColor: 'transparent',
    }
  },
  phoneLink: {
    fontSize: '3.5vw',
    marginLeft: '2vw',
    [theme.breakpoints.down('md')]: {
      fontSize: '7.55vw',
      marginLeft: '4vw',
    },
    '&:hover': {
      color: 'gray',
    },
  },
  emailLink: {
    fontSize: '1.95vw',
    marginLeft: '1.8vw',
    [theme.breakpoints.down('md')]: {
      fontSize: '4.15vw',
      marginLeft: '4vw',
    },
    '&:hover': {
      color: 'gray',
    },
  },
  iconButton: {
    color: 'black',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    height: '5vh',
    width: '5vw',
    [theme.breakpoints.down('sm')]: {
      height: '8vh',
      width: '8vw',
    }
  },
  icons: {
    marginTop: '5vh',
  },
}))


const ContactInfo = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography className={classes.myName} variant="h1">
        Matt Park
      </Typography>
      <a className={classes.link} target="_top" href="tel:+1201-591-3323">
        <IconButton
          edge="start"
          className={classes.iconButton}
          color="inherit"
          aria-label="Phone Button"
          disableRipple
          disableFocusRipple
        >
          <PhoneInTalk className={classes.icon} />
          <Typography className={classes.phoneLink} variant="h4">
            (201) 591 - 3323
          </Typography>
        </IconButton>
      </a>
      <a className={classes.link} target="_top" href="mailto:mattparksolutions@gmail.com">
        <IconButton
          edge="start"
          className={classes.iconButton}
          color="inherit"
          aria-label="Email Button"
          disableRipple
          disableFocusRipple
        >
          <Email className={classes.icon} />
          <Typography className={classes.emailLink} variant="h4">
            mattparksolutions@gmail.com
          </Typography>
        </IconButton>
      </a>
      <div className={classes.icons}>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/mattparksolutions">
          <IconButton
            edge="start"
            className={classes.iconButton}
            color="inherit"
            aria-label="GitHub Button"
            disableRipple
            disableFocusRipple
          >
            <GitHub className={classes.icon} />
          </IconButton>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/mattparksolutions">
          <IconButton
            edge="start"
            className={classes.iconButton}
            color="inherit"
            aria-label="LinkedIn Button"
            disableRipple
            disableFocusRipple
          >
            <LinkedIn className={classes.icon} />
          </IconButton>
        </a>
      </div>
    </div>
  )
}
export default ContactInfo