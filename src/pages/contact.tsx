import React from 'react'
import PropTypes, { InferProps } from 'prop-types'

import ContactPage from '../page-components/contact-page'
import SEO from '../components/seo'

const Contact = ({ location }: InferProps<typeof Contact.propTypes>) => (
    <>
        <SEO pageTitle="Contact" />
        <ContactPage location={location} />
    </>
)
Contact.propTypes = {
    location: PropTypes.object.isRequired,
}
export default Contact
