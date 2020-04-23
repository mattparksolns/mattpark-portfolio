import React from 'react'

import {
  makeStyles,
} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.root}>
      <p>
        ©{new Date().getFullYear()} Matt Park
        <br/>
        All rights reserved
      </p>
    </footer>
  )
}

export default Footer