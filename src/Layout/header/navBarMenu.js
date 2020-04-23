import { Link } from "gatsby"
import React, { useState } from "react"
import {
  makeStyles,
  Button,
} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
}))

const NavBarMenu = ({ menuAnchorEl, isMenuOpen, handleMenuButton }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Link to="/about">
        <Button>About</Button>
      </Link>
      <Link to="/about">
        <Button>Blog</Button>
      </Link>
      <Link to="/about">
        <Button>Contact</Button>
      </Link>
    </div>
  )
}

export default NavBarMenu