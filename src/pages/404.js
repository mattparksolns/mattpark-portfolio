import React from "react"
import { Typography } from '@material-ui/core'

import SEO from "../components/seo"

const NotFoundPage = () => <>
  <SEO title="404: Not found" />
  <Typography variant="h2" component="p">404 NOT FOUND</Typography>
  <Typography variant="h6">You just hit a route that doesn&#39;t exist...</Typography>
</>
export default NotFoundPage
