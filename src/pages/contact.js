import React, { useState } from 'react'
import {
  makeStyles,
  Typography,
  IconButton,
  FormControlLabel,
  TextField,
  Checkbox,
  Button,
} from '@material-ui/core'
import {
  Send,
  GitHub,
  LinkedIn,
  Email,
  PhoneInTalk,
} from '@material-ui/icons'

import Layout from "../layout"

const useStyles = makeStyles((theme) => ({
  root: {
  },
  container: {
    // border: '1px solid black',
    margin: '0 5vw',
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
    justifyContent: 'space-between',
  },
  info: {
    // border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    }
  },
  myName: {
    marginBottom: '8vh',
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
    width: 30,
    height: 30,
  },
  icons: {
    marginTop: '5vh',
  },
  formContainer: {
    // border: '1px solid black',
    width: '40%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    }
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputField: {
    marginTop: '2vh',
  },
  privacyPolicyLabel: {
    fontFamily: 'Montserrat',
  },
  sendButtonContainer: {
    marginTop: '2vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
}))


const ContactPage = () => {
  const classes = useStyles()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [privacyPolicyChecked, setPrivacyPolicyChecked] = useState(false)

  const onNameChange = (e) => {
    setName(e.target.value)
  }
  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePrivacyPolicyCheckbox = () => {
    setPrivacyPolicyChecked(!privacyPolicyChecked)
  }

  const handleSubmit = () => {

  }


  return (
    <Layout>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.info}>
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
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/mattparksolutions">
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
              <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/mattparksolutions">
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
          <div className={classes.formContainer}>
            <form
              className={classes.form}
              method="POST"
              action="https://formspree.io/xnqbeekg"
              autoComplete="off"
            >
              <TextField
                required
                className={classes.inputField}
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                type="text"
                value={name}
                onChange={onNameChange}
              />
              <TextField
                required
                className={classes.inputField}
                id="Email"
                name="email"
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={onEmailChange}
              />
              <TextField
                required
                className={classes.inputField}
                multiline
                rows={8}
                id="Message"
                name="message"
                label="Message"
                variant="outlined"
              />
              <FormControlLabel
                className={classes.inputField}
                control={<Checkbox required name="privacypolicy" color="default" onChange={handlePrivacyPolicyCheckbox}/>}
                label={
                  <Typography
                    className={classes.privacyPolicyLabel}
                    variant="caption"
                  >
                    I understand that Matt will securely hold my data in accordance with their privacy policy.
                  </Typography>}
              />
              <div className={classes.sendButtonContainer}>
                <div />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<Send />}
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage