import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import validator from 'validator'
import axios from 'axios'
import {
  withStyles,
  Typography,
  FormControlLabel,
  TextField,
  Checkbox,
  Button,
} from '@material-ui/core'
import {
  Send,
} from '@material-ui/icons'

import {
  setIPv4,
  setIPv6,
  setGeoData,
} from '../../actions'

const ContactForm = withStyles((theme) => ({
  root: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  inputField: {
    marginTop: '2vh',
    width: '100%',
    borderRadius: 0,
  },
  cssLabel: {
    '&$cssFocused': {
      color: '#000000',
    }
  },
  cssFocused: {
  },
  cssOutlinedInput: {
    borderRadius: 0,
    '&$cssFocused $notchedOutline': {
      borderColor: '#000000',
    },
  },
  notchedOutline: {
    borderColor: '#000000',
  },
  privacyPolicyText: {
    fontFamily: 'Montserrat',
    // fontSize: '1.5vw',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5vw',
    }
  },
  button: {
    marginTop: '2vh',
    borderRadius: 0,
    color: theme.text.inverse,
    '& .MuiSvgIcon-root': {
      color: theme.text.inverse,
    },
    backgroundColor: theme.text.primary,
    '&:hover': {
      backgroundColor: '#383838',
    },
  },
}))(({ classes, ipv4, ipv6, geoData, setIPv4, setIPv6, setGeoData }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [privacyPolicyChecked, setPrivacyPolicyChecked] = useState(false)
  const handlePrivacyPolicyCheckbox = (e) => {
    setPrivacyPolicyChecked(!privacyPolicyChecked)
  }

  useEffect(() => {
    axios.get('https://api.ipify.org?format=json').then((response) => {
      console.log(response)
      setIPv4(response.data)
    }).catch((error) => {
      console.log(error)
    })
    axios.get('https://api6.ipify.org?format=json').then((response) => {
      console.log(response)
      setIPv6(response.data)
    }).catch((error) => {
      console.log(error)
    })
    axios.get('https://geolocation-db.com/json/6db070f0-7c27-11ea-8264-e974339fc182').then((response) => {
      console.log(response)
      setGeoData(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  const handleSubmit = () => {
    if(!validator.isEmpty(name) && validator.isEmail(email) && !validator.isEmpty(message) && privacyPolicyChecked) {
      axios.post("https://formspree.io/xnqbeekg", {
      // axios.post("https://getform.io/f/1e500d01-7ba1-43ee-9a70-b37c95dde299", {
        name,
        email,
        message,
        privacyPolicyChecked,
        ipv4,
        ipv6,
        geoData,
      }).then((response) => {
          console.log(response)
      }).catch((error) => {
        console.log(error)
      })
    } else {
      console.log('Invalid Input')
    }
  }

  return (
    <div className={classes.root}>
      <form
        className={classes.form}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <TextField
          required
          color="primary"
          className={classes.inputField}
          name="name"
          label="Name"
          variant="outlined"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          InputLabelProps={{ classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          }}}
          InputProps={{ classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline
          }}}
        />
        <TextField
          required
          className={classes.inputField}
          name="email"
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          InputLabelProps={{ classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            }}}
          InputProps={{ classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline
            }}}
        />
        <TextField
          required
          className={classes.inputField}
          multiline
          rows={8}
          name="message"
          label="Message"
          variant="outlined"
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
          InputLabelProps={{ classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            }}}
          InputProps={{ classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline
            }}}
        />
        <FormControlLabel
          className={classes.inputField}
          control={<Checkbox required name="privacypolicy" color="default" onChange={handlePrivacyPolicyCheckbox}/>}
          label={
            <Typography className={classes.privacyPolicyText}>
              I understand that Matt will securely hold my data in accordance with their privacy policy.
            </Typography>}
        />
        <Button
          className={classes.button}
          type="submit"
          variant="contained"
          size="large"
          endIcon={<Send />}
        >
          Send
        </Button>
      </form>
    </div>
  )
})
export default connect(
  (state) => ({
    ipv4: state.app.ipv4,
    ipv6: state.app.ipv6,
    geoData: state.app.geoData,
  }),
  (dispatch) => ({
    setIPv4: ip => dispatch(setIPv4(ip)),
    setIPv6: ip => dispatch(setIPv6(ip)),
    setGeoData: data => dispatch(setGeoData(data)),
  })
)(ContactForm)
