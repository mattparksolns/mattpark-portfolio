import React, { forwardRef } from 'react'
import { Link as MuiLink } from '@material-ui/core'
import { Link as GatsbyLink } from 'gatsby'

const Link = forwardRef((props, ref) => {
  return props.to
    ? <MuiLink component={GatsbyLink} ref={ref} {...props} />
    : <MuiLink ref={ref} {...props} />
})
export default Link
