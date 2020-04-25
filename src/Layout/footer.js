import React from 'react'

import {
  makeStyles,
  Typography,
} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 5vw',
  },
  footer: {
    fontFamily: 'Montserrat',
    fontSize: 13,
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.root}>
      <Typography className={classes.footer}>
        © {new Date().getFullYear()} Matt Park
        <br />
        All rights reserved
      </Typography>
    </footer>
  )
}

export default Footer