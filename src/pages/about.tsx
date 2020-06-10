import React from 'react'
import PropTypes, { InferProps } from "prop-types";

import AboutPage from '../page-components/about-page'
import SEO from '../features/seo'

const About = ({
  location
}: InferProps<typeof About.propTypes>) => (
  <>
    <SEO pageTitle="About" canonical={location.pathname} />
    <AboutPage location={location} />
  </>
)
About.propTypes = {
  location: PropTypes.object.isRequired,
}
export default About
