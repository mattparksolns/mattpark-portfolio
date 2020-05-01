import React from 'react'

import Layout from '../layout'
import SEO from '../layout'
import ContactPage from '../features/contact-page'

const About = () => {
  return (
    <Layout>
      <SEO pageTitle="Contact" />
      <ContactPage />
    </Layout>
  )
}

export default About