import React from "react"

import Index from "../layout"
import SEO from "../layout/seo"

const NotFoundPage = () => (
  <Index>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
  </Index>
)

export default NotFoundPage
