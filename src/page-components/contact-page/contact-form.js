import React, { useState } from 'react'
import { connect } from 'react-redux'
import validator from 'validator'
import axios from 'axios'
import {
  withStyles,
  FormControlLabel,
  Checkbox,
  Button,
} from '@material-ui/core'
import { Send } from '@material-ui/icons'

import StyledTextField from './styled-text-field'

const ContactForm = withStyles((theme) => ({
  form: {
    marginTop: theme.spacing(4),
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      width: '100%',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    '& > *:nth-child(1n + 1):not(*:last-child)': {
      width: '100%',
      marginBottom: theme.spacing(2),
    }
  },
}))(({ classes, ipv4, ipv6, geoData }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [privacyPolicyChecked, setPrivacyPolicyChecked] = useState(false)

  const handleSubmit = () => {
    if(!validator.isEmpty(name) && validator.isEmail(email) && !validator.isEmpty(message) && privacyPolicyChecked) {
      // axios.post("https://getform.io/f/1e500d01-7ba1-43ee-9a70-b37c95dde299", {
      axios.post("https://formspree.io/xnqbeekg", {
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
    }
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <StyledTextField
        label={"Name"}
        value={name}
        onChange={e => setName(e.target.value)}
        inputProps={{ 'aria-label': 'name' }}
      />
      <StyledTextField
        label={"Email"}
        value={email}
        onChange={e => setEmail(e.target.value)}
        inputProps={{ 'aria-label': 'email' }}
      />
      <StyledTextField
        label={"Message"}
        value={message}
        onChange={e => setMessage(e.target.value)}
        multiline
        rows={8}
        inputProps={{ 'aria-label': 'message' }}
      />
      <FormControlLabel
        className={classes.privacyPolicyText}
        control={<Checkbox
          required
          checked={privacyPolicyChecked}
          onChange={e => setPrivacyPolicyChecked(!privacyPolicyChecked)}
          inputProps={{ 'aria-label': 'privacy policy' }}
        />}
        label={"I understand that Matt will securely hold my data in accordance with their privacy policy."}
      />
      <Button
        className={classes.button}
        type="submit"
        variant="contained"
        size="large"
        endIcon={<Send />}
        aria-label={"send"}
      >
        Send
      </Button>
    </form>
  )
})
export default connect(
  (state) => ({
    ipv4: state.app.ipv4,
    ipv6: state.app.ipv6,
    geoData: state.app.geoData,
  }),
  (dispatch) => ({
  })
)(ContactForm)
