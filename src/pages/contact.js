import React from 'react'
import {
  makeStyles,
  Typography,
  IconButton,
  FormControl,
  FormHelperText,
  InputLabel,
  Input,
} from '@material-ui/core'
import {
  GitHub,
  LinkedIn,
  Email,
  PhoneInTalk,
} from '@material-ui/icons'

import Layout from "../Layout"

const useStyles = makeStyles((theme) => ({
  root: {
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  contactinfo: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
  },
  myName: {
    marginBottom: '10vh',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      color: 'darkgray',
      backgroundColor: 'ghostwhite',
    }
  },
  emailLink: {
    fontSize: 24,
  },
  iconButton: {
    color: 'black',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  button: {
    width: '3vw',
    height: '4vh',
  },
  icons: {
    marginTop: '5vh',
  },
  messageForm: {
    width: '50%',
  },
}))


const ContactPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.contactinfo}>
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
                <PhoneInTalk className={classes.button} />
              </IconButton>
              <Typography variant="h4">
                (201) 591 - 3323
              </Typography>
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
                <Email className={classes.button} />
              </IconButton>
              <Typography className={classes.emailLink} variant="h4">
                mattparksolutions@gmail.com
              </Typography>
            </a>
            <div className={classes.icons}>
              <a target="_blank" href="https://github.com/mattparksolutions">
                <IconButton
                  edge="start"
                  className={classes.iconButton}
                  color="inherit"
                  aria-label="GitHub Button"
                  disableRipple
                  disableFocusRipple
                >
                  <GitHub className={classes.button} />
                </IconButton>
              </a>
              <a target="_blank" href="https://linkedin.com/in/mattparksolutions">
                <IconButton
                  edge="start"
                  className={classes.iconButton}
                  color="inherit"
                  aria-label="LinkedIn Button"
                  disableRipple
                  disableFocusRipple
                >
                  <LinkedIn className={classes.button} />
                </IconButton>
              </a>
            </div>
          </div>
          <div className={classes.messageForm}>
            <FormControl>
              <InputLabel htmlFor="my-input">Name</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
              <InputLabel htmlFor="my-input">Email</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage