import React from 'react'
import {
  makeStyles,
} from '@material-ui/core'

import SEO from '../../components/seo'
import ContactInfo from './contact-info'
import ContactForm from './contact-form'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 5vw',
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    justifyContent: 'space-between',
  },
}))
const ContactPage = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <SEO pageTitle="Contact" />
      <ContactInfo />
      <ContactForm />
    </div>
  )
}
export default ContactPage
