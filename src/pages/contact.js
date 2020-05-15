import React from 'react'

import ContactPage from '../page-components/contact-page'
import SEO from '../features/seo'

const Contact = ({ location }) => (
  <>
    <SEO pageTitle="Contact" />
    <ContactPage location={location} />
  </>
)
export default Contact
