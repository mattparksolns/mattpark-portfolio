import React, { useState } from 'react'
import { connect } from 'react-redux'
import validator from 'validator'
import axios from 'axios'
import { withStyles, FormControlLabel, Checkbox } from '@material-ui/core'
import { Send } from '@material-ui/icons'
import emailjs from 'emailjs-com'

import StyledTextField from './styled-text-field'
import ValorantButton from '../../components/valorant-button'

const ContactForm = withStyles(theme => ({
    form: {
        marginTop: theme.spacing(2),
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    privacyPolicy: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    error: {
        color: theme.palette.error.main,
    },
}))(({ classes, userData }) => {
    emailjs.init('user_0egEnFumA4H3XIq2ocucl')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [policyChecked, setPolicyChecked] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [messageError, setMessageError] = useState(false)
    const [policyError, setPolicyError] = useState(false)

    const clearForm = () => {
        setName('')
        setEmail('')
        setMessage('')
        setPolicyChecked(false)
        setPolicyError(false)
    }
    const handleSubmit = () => {
        if (
            !validator.isEmpty(name) &&
            validator.isEmail(email) &&
            !validator.isEmpty(message) &&
            policyChecked
        ) {
            // emailjs.send('gmail', 'contact_form_email_template', {
            //   name, email, message, ipv4, ipv6, geoData
            // }).then(response => {
            //   console.log('SUCCESS!', response.status, response.text)
            // }, error => {
            //   console.error(error)
            // })
            // axios.post("https://getform.io/f/1e500d01-7ba1-43ee-9a70-b37c95dde299", {
            axios
                .post('https://formspree.io/xnqbeekg', {
                    name,
                    email,
                    message,
                    policyChecked,
                    userData,
                })
                .then(response => {
                    console.log(response)
                    clearForm()
                })
                .catch(error => {
                    console.log(error)
                })
        } else {
            if (validator.isEmpty(name)) setNameError(true)
            if (!validator.isEmail(email)) setEmailError(true)
            if (validator.isEmpty(message)) setMessageError(true)
            if (!policyChecked) setPolicyError(true)
        }
    }

    return (
        <form
            id={'#contactForm'}
            className={classes.form}
            onSubmit={handleSubmit}
        >
            <StyledTextField
                inputProps={{ 'aria-label': 'name' }}
                label={'Name'}
                value={name}
                error={nameError}
                helperText={nameError && 'Cannot be empty.'}
                onChange={e => setName(e.target.value)}
                onInput={e => setNameError(false)}
                onBlur={e => setNameError(validator.isEmpty(name))}
            />
            <StyledTextField
                inputProps={{ 'aria-label': 'email' }}
                label={'Email'}
                value={email}
                error={emailError}
                helperText={emailError && 'Please provide a valid email.'}
                onChange={e => setEmail(e.target.value)}
                onInput={e => setEmailError(false)}
                onBlur={e => setEmailError(!validator.isEmail(email))}
            />
            <StyledTextField
                inputProps={{ 'aria-label': 'message' }}
                label={'Message'}
                value={message}
                error={messageError}
                helperText={messageError && 'Cannot be empty.'}
                onChange={e => setMessage(e.target.value)}
                onInput={e => setMessageError(false)}
                onBlur={e => setMessageError(validator.isEmpty(message))}
                multiline
                rows={8}
            />
            <FormControlLabel
                className={`${classes.privacyPolicy} ${
                    policyError && classes.error
                }`}
                control={
                    <Checkbox
                        inputProps={{ 'aria-label': 'privacy policy' }}
                        required
                        checked={policyChecked}
                        color={'primary'}
                        onChange={e => setPolicyChecked(!policyChecked)}
                    />
                }
                label={
                    'I understand that Matt will securely hold my data in accordance with the privacy policy.*'
                }
            />
            <ValorantButton
                aria-label={'send'}
                handleSubmit={handleSubmit}
                endIcon={<Send />}
            >
                Send
            </ValorantButton>
        </form>
    )
})
export default connect(state => ({
    userData: state.app.userData,
}))(ContactForm)
