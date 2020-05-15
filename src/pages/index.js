import React from 'react'

import HomePage from '../page-components/home-page'
import SEO from '../features/seo'

const Home = ({ location }) => (
  <>
    <SEO />
    <HomePage location={location} />
  </>
)
export default Home
