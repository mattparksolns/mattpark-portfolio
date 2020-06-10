import React from 'react'
import PropTypes, { InferProps } from 'prop-types'

import WorkPage from '../page-components/work-page/index'
import SEO from '../features/seo'

const Work = ({
  location
}: InferProps<typeof Work.propTypes>) => (
  <>
    <SEO pageTitle="Work" />
    <WorkPage location={location} />
  </>
)
Work.propTypes = {
  location: PropTypes.object.isRequired,
}
export default Work
