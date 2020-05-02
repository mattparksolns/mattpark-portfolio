import React from 'react'

import Layout from '../layout'
import SEO from '../layout/seo'
import AboutPage from '../features/about-page'

const About = () => {
  return (
    <Layout>
      <SEO pageTitle="About" />
      <AboutPage />
    </Layout>
  )
}

export default About