import React from 'react'

import WorkPage from '../page-components/work-page'
import SEO from '../features/seo'

const Work = ({ location }) => (
  <>
    <SEO pageTitle="Work" />
    <WorkPage location={location} />
  </>
)
export default Work
