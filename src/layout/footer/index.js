import React from 'react'
import { withStyles, Divider } from '@material-ui/core'

import ContactMe from './contact-me'
import Copyright from './copyright'

const Footer = withStyles(theme => ({
  root: {
    background: `linear-gradient(180deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
  },
  divider: {
    backgroundColor: theme.palette.secondary.main,
    height: 2,
    marginBottom: 5,
  },
}))(({ classes, location }) => {
  return (
    <footer className={classes.root}>
      { location.pathname !== '/contact/' && <ContactMe /> }
      <Divider className={classes.divider} />
      <Copyright />
    </footer>
  )
})
export default Footer
