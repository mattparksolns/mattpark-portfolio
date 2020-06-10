import React from "react"
import PropTypes, { InferProps } from 'prop-types'
import { Typography } from '@material-ui/core'

import SEO from "../features/seo"

const NotFoundPage = ({
  location
}: InferProps<typeof NotFoundPage.propTypes>) => (
  <>
    <SEO title="404: Not found" />
    <Typography variant="h2" component="p">404 NOT FOUND</Typography>
    <Typography variant="h6">You just hit a route that doesn&#39;t exist...</Typography>
  </>
)
NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,
}
export default NotFoundPage
