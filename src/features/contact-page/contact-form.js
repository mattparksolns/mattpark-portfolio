import React, {
  useState,
  useEffect,
} from 'react'
import { connect } from 'react-redux'
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

import reducer from '../../state/app'
import {
  setIPv4,
  setIPv6,
  setGeoData,
} from '../../actions'
import { GET_IPV4, GET_IPV6, GET_GEODATA } from "../../actions/actionTypes";

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


const ContactForm = ({ ipv4, ipv6, geoData, setIPv4 }) => {
  const classes = useStyles()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [privacyPolicyChecked, setPrivacyPolicyChecked] = useState(false)
  const handlePrivacyPolicyCheckbox = (e) => {
    setPrivacyPolicyChecked(!privacyPolicyChecked)
  }

  useEffect(() => {
    axios.get('https://api.ipify.org?format=json').then((response) => {
      console.log(`ipv4: ${ipv4}`)
      // console.log(response)
      setIPv4(response.data)
      console.log(`ipv4: ${ipv4}`)
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

const mapStateToProps = (state) => {
  return {
    ipv4: state.ipv4,
    ipv6: state.ipv6,
    geoData: state.geoData,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setIPv4: ip => { dispatch(setIPv4(ip)) },
    setIPv6: ip => { dispatch(setIPv6(ip)) },
    setGeoData: data => { dispatch(setGeoData(data)) },
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm)