import React from "react"
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core'

import "./layout.css"
import Header from "./header"
import Footer from './footer'

const Layout = withStyles((theme) => ({
  main: {
    minHeight: '72vh',
    margin: '20vh 10vw 0',
    [theme.breakpoints.down('sm')]: {
      margin: '20vh 3vw 0',
    },
  },
}))(({ classes, location, children }) => {
  return (
    <>
      <Header />
      <main className={classes.main} role={"main"}>{children}</main>
      <Footer />
    </>
  )
})
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
