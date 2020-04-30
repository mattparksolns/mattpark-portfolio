import React from 'react'
import {
  makeStyles,
} from '@material-ui/core'

import Layout from "../../layout"
import SEO from "../../layout/seo"
import ContactInfo from './contactInfo'
import ContactForm from './contactForm'

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


const Contact = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO pageTitle="Contact" />
      <div className={classes.root}>
        <ContactInfo />
        <ContactForm />
      </div>
    </Layout>
  )
}
export default Contact