import React, { useState, useEffect } from 'react'
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
import emailjs from 'emailjs-com'

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
    },
    '& > button': {
      width: '10rem',
      height: '3rem',
      fontSize: '1.1rem',
      transition: 'all .8s cubic-bezier(.19,1,.22,1)',
      '& > span': {
        // transform: 'translate(5px)',
      },
      '& > span > span > svg': {
        position: 'absolute',
        width: 20,
        height: 20,
        left: '63%',
        opacity: 0,
        transform: 'translate(5px, -53%)',
        transition: 'opacity .8s cubic-bezier(.19,1,.22,1)',
        // transition: 'margin .8s ease-in'
      },
      '&:hover': {
        paddingRight: 35,
        '& > span > span > svg': {
          transform: 'translate(0px, -53%)',
          // display: 'inline',
          opacity: 1,
        }
      }
    }
  },
}))(({ classes, ipv4, ipv6, geoData }) => {
  emailjs.init('user_0egEnFumA4H3XIq2ocucl')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [privacyPolicyChecked, setPrivacyPolicyChecked] = useState(false)

  useEffect(() => {
    // const sendBtn = document.getElementById('send-btn')
    // const listener = sendBtn.addEventListener('mouseover', e => {
    //   const sendSvg = e.srcElement.querySelector('svg')
    //   setTimeout(() => {
    //     sendSvg.style.opacity = '1'
    //   }, 50)
    // })
    // return () => sendBtn.removeEventListener('mouseover', listener)
  }, [])

  const handleSubmit = () => {
    if(!validator.isEmpty(name) && validator.isEmail(email) && !validator.isEmpty(message) && privacyPolicyChecked) {
      // emailjs.send('gmail', 'contact_form_email_template', {
      //   name, email, message, ipv4, ipv6, geoData
      // }).then(response => {
      //   console.log('SUCCESS!', response.status, response.text)
      // }, error => {
      //   console.error(error)
      // })
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
    <form id={"#contactForm"} className={classes.form} onSubmit={handleSubmit}>
      <StyledTextField inputProps={{ 'aria-label': 'name' }}
                       label={"Name"} value={name} error={validator.isEmpty(name)}
                       onChange={e => setName(e.target.value)}/>
      <StyledTextField inputProps={{ 'aria-label': 'email' }}
                       label={"Email"} value={email} error={!validator.isEmail(email)}
                       onChange={e => setEmail(e.target.value)}/>
      <StyledTextField inputProps={{ 'aria-label': 'message' }}
                       label={"Message"} value={message} error={validator.isEmpty(message)}
                       onChange={e => setMessage(e.target.value)}
                       multiline rows={8}/>
      <FormControlLabel control={<Checkbox
        inputProps={{ 'aria-label': 'privacy policy' }} required
        checked={privacyPolicyChecked} color={"primary"}
        onChange={e => setPrivacyPolicyChecked(!privacyPolicyChecked)} />}
        label={"I understand that Matt will securely hold my data in accordance with their privacy policy."}/>
      <Button id={"send-btn"} aria-label={"send"} type="submit" variant={"contained"}
              endIcon={<Send />}>Send</Button>
    </form>
  )
})
export default connect(
  (state) => ({
    ipv4: state.app.ipv4,
    ipv6: state.app.ipv6,
    geoData: state.app.geoData,
  }),
)(ContactForm)
