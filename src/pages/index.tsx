import React from 'react'
import PropTypes, { InferProps } from 'prop-types'

import HomePage from '../page-components/home-page/index'
import SEO from '../features/seo'

const Home = ({
  location
}: InferProps<typeof Home.propTypes>) => (
  <>
    <SEO />
    <HomePage location={location} />
  </>
)
Home.propTypes = {
  location: PropTypes.object.isRequired,
}
export default Home
