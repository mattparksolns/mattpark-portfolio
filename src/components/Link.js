import React, { forwardRef } from 'react'
import MuiLink from '@material-ui/core'
import { Link as GatsbyLink } from 'gatsby'

const Link = forwardRef((props, ref) => {
  return <MuiLink component={GatsbyLink} ref={ref} {...props} />
})
export default Link
