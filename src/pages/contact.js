import React from 'react'
import {
  makeStyles,
  Typography,
  IconButton,
} from '@material-ui/core'
import {
  GitHub,
  LinkedIn,
} from '@material-ui/icons'

import Layout from "../Layout"

const useStyles = makeStyles((theme) => ({
  root: {
  },
  contactinfo: {
  },
  iconButton: {
    color: 'black',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  button: {
    width: '7vw',
    height: '7vh',
  }
}))


const ContactPage = () => {
  const classes = useStyles()

  const handleGitHub = () => {
    window.open('https://github.com/mattparksolutions', '_blank')
  }
  const handleLinkedIn = () => {
    window.open('https://linkedin.com/in/mattparksolutions', '_blank')
  }

  return (
    <Layout>
      <div className={classes.root}>
        <div className={classes.contactinfo}>
          <Typography variant="h1">
            Matt Park
          </Typography>
          <Typography variant="h3">
            (201) 591 - 3323
          </Typography>
          <Typography variant="h3">
            mattparksolutions@gmail.com
          </Typography>
          <IconButton
            edge="start"
            className={classes.iconButton}
            color="inherit"
            aria-label="GitHub Button"
            onClick={handleGitHub}
            disableRipple
            disableFocusRipple
          >
            <GitHub className={classes.button} />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.iconButton}
            color="inherit"
            aria-label="LinkedIn Button"
            onClick={handleLinkedIn}
            disableRipple
            disableFocusRipple
          >
            <LinkedIn className={classes.button} />
          </IconButton>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage