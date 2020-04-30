import React, {
  useState,
  useEffect,
} from 'react'
import validator from 'validator'
import axios from 'axios'
import {
  makeStyles,
  Typography,
  FormControlLabel,
  TextField,
  Checkbox,
  Button,
} from '@material-ui/core'
import {
  Send,
} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    // border: '1px solid black',
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
  },
  privacyPolicyText: {
    fontFamily: 'Montserrat',
  },
  button: {
    marginTop: '2vh',
    borderRadius: 0,
    color: 'white',
    backgroundColor: 'black',
    '&:hover': {
      backgroundColor: '#383838',
    },
  },
}))


const ContactForm = () => {
  const classes = useStyles()

  const [ipv4, setIpv4] = useState('')
  const [ipv6, setIpv6] = useState('')
  const [geodata, setGeodata] = useState({})
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
      setIpv4(response.data)
    }).catch((error) => {
      console.log(error)
    })
    axios.get('https://api6.ipify.org?format=json').then((response) => {
      console.log(response)
      setIpv6(response.data)
    }).catch((error) => {
      console.log(error)
    })
    axios.get('https://geolocation-db.com/json/6db070f0-7c27-11ea-8264-e974339fc182').then((response) => {
      console.log(response)
      setGeodata(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  const handleSubmit = () => {
    if(!validator.isEmpty(name) && validator.isEmail(email) && !validator.isEmpty(message) && privacyPolicyChecked) {
      axios.post("https://formspree.io/xnqbeekg", {
        name,
        email,
        message,
        privacyPolicyChecked,
        ipv4,
        ipv6,
        geodata,
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
          className={classes.inputField}
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
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
          onChange={e => setEmail(e.target.value)}
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
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <FormControlLabel
          className={classes.inputField}
          control={<Checkbox required name="privacypolicy" color="default" onChange={handlePrivacyPolicyCheckbox}/>}
          label={
            <Typography
              className={classes.privacyPolicyText}
              variant="caption"
            >
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
}
export default ContactForm