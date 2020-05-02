import React from "react"
import {
  makeStyles,
} from '@material-ui/core'

import NavBar from './navbar'


const useStyles = makeStyles((theme) => ({
  root: {
    background: '#303030',
    marginBottom: '1.45rem',
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <NavBar>
    </NavBar>
  )
}

export default Header
