import React from 'react'

import Layout from '../layout'
import SEO from '../layout/seo'
import WorkPage from '../features/work-page'

const Work = () => {
  return (
    <Layout>
      <SEO pageTitle="Work" />
      <WorkPage />
    </Layout>
  )
}

export default Work