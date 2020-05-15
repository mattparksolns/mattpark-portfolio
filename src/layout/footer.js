import React from 'react'
import { withStyles, Typography } from '@material-ui/core'

const Footer = withStyles((theme) => ({
  root: {
    margin: '0 15vw',
    [theme.breakpoints.down('sm')]: {
      margin: '0 3vw',
    },
  },
  footerHr: {
    backgroundColor: theme.colors.footerHr,
    height: 2,
    marginBottom: 10,
  },
  lineBreak: {
    display: 'block',
    marginBottom: -8,
  }
}))(({ classes }) => {
  return (
    <footer className={classes.root} role={"contentinfo"}>
      <hr className={classes.footerHr} />
      <Typography variant="caption">
        © {new Date().getFullYear()} Matt Park
      </Typography>
      <span className={classes.lineBreak} />
      <Typography variant="caption">
        All rights reserved
      </Typography>
    </footer>
  )
})
export default Footer
