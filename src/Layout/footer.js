import React from 'react'

import {
  makeStyles,
  Typography,
} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.root}>
      <Typography variant="caption">
        ©{new Date().getFullYear()} Matt Park
        <br />
        All rights reserved
      </Typography>
    </footer>
  )
}

export default Footer