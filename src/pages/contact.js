import React from 'react'

import Layout from '../layout'
import SEO from '../layout/seo'
import ContactPage from '../features/contact-page'

const Contact = () => {
  return (
    <Layout>
      <SEO pageTitle="Contact" />
      <ContactPage />
    </Layout>
  )
}

export default Contact