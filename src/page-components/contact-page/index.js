import React from 'react'
import { withStyles } from '@material-ui/core'

import ContactInfo from './contact-info'
import ContactForm from './contact-form'

const ContactPage = withStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
        justifyContent: 'space-between',
    },
}))(({ classes }) => {
    return (
        <div className={`${classes.root} contentWrapper`}>
            <ContactInfo />
            <ContactForm />
        </div>
    )
})
export default ContactPage
