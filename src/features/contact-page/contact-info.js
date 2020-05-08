import React from 'react'
import {
  makeStyles,
  Typography,
  IconButton,
} from '@material-ui/core'
import {
  GitHub,
  LinkedIn,
  MailOutline,
  PhoneInTalkOutlined,
} from '@material-ui/icons'


const useStyles = makeStyles((theme) => ({
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
    fontSize: '7.4vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18vw',
    },
  },
  myInfo: {
    marginBottom: '5vh',
    [theme.breakpoints.down('sm')]: {
      marginTop: '5vh',
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
    marginLeft: '2vw',
    fontSize: '3vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '7.55vw',
      marginLeft: '4vw',
    },
    '&:hover': {
      color: 'gray',
    },
  },
  emailLink: {
    marginLeft: '1.8vw',
    fontSize: '1.7vw',
    [theme.breakpoints.down('sm')]: {
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
    width: '3vw',
    [theme.breakpoints.down('sm')]: {
      width: '5vw',
    }
  },
  icons: {
    marginTop: '2vh',
    [theme.breakpoints.down('sm')]: {
      marginTop: '0',
    }
  },
}))


const ContactInfo = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography className={classes.myName} variant="h1">
        Matt Park
      </Typography>
      <div className={classes.myInfo}>
        <a className={classes.link} target="_top" href="tel:+1201-591-3323">
          <IconButton
            edge="start"
            className={classes.iconButton}
            color="inherit"
            aria-label="Phone Button"
          >
            <PhoneInTalkOutlined className={classes.icon} />
            <Typography className={classes.phoneLink} variant="h2">
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
          >
            <MailOutline className={classes.icon} />
            <Typography className={classes.emailLink} variant="h2">
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
            >
              <LinkedIn className={classes.icon} />
            </IconButton>
          </a>
        </div>
      </div>
    </div>
  )
}
export default ContactInfo