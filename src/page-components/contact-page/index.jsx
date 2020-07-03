import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core'

import ContactInfo from './contact-info'
import ContactForm from './contact-form'

const useStyles = makeStyles(({ breakpoints }) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'row',
            [breakpoints.down('sm')]: {
                flexDirection: 'column',
            },
            justifyContent: 'space-between',
        },
    }),
)
const ContactPage = () => {
    const classes = useStyles()
    return (
        <div className={`${classes.root} contentWrapper`}>
            <ContactInfo />
            <ContactForm />
        </div>
    )
}
export default ContactPage
