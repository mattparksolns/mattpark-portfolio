import React from 'react'
import {
  makeStyles,
} from '@material-ui/core'

import Layout from "../../layout"
import ContactInfo from './contactInfo'
import ContactForm from './contactForm'

const useStyles = makeStyles((theme) => ({
  root: {
    // border: '1px solid black',
    margin: '0 5vw',
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
    justifyContent: 'space-between',
  },
}))


const Contact = () => {
  const classes = useStyles()

  return (
    <Layout>
      <div className={classes.root}>
        <ContactInfo />
        <ContactForm />
      </div>
    </Layout>
  )
}
export default Contact