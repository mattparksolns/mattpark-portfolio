import React from 'react'

import Layout from "../layout"
import SEO from "../layout/seo"
import HomePage from '../features/home-page'

const Home = () => {
  return (
    <Layout>
      <SEO pageTitle="Home" />
      <HomePage />
    </Layout>
  )
}

export default Home