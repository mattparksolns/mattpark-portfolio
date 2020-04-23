import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import {
  makeStyles,
} from '@material-ui/core'

import NavBar from './navBar'
import NavBarMenu from "./navBarMenu"


const useStyles = makeStyles((theme) => ({
  root: {
    background: '#303030',
    marginBottom: '1.45rem',
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()

  return (
    <header className={classes.root}>
      <NavBar siteTitle={siteTitle} />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
