import React from 'react'

import AboutPage from '../page-components/about-page'
import SEO from '../features/seo'

const About = ({ location }) => (
  <>
    <SEO pageTitle="About" canonical={location.pathname} />
    <AboutPage location={location} />
  </>
)
export default About
