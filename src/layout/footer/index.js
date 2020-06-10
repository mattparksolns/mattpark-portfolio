import React from 'react'
import { withStyles, Divider } from '@material-ui/core'

import ContactCard from './contact-card'
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
      { location.pathname !== '/contact/' && <ContactCard /> }
      <Divider className={classes.divider} />
      <Copyright />
    </footer>
  )
})
export default Footer
