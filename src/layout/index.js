import React from "react"
import PropTypes from "prop-types"
import {
  makeStyles,
  Container,
  Button,
} from "@material-ui/core";

import "./layout.css"
import Header from "./header"
import Footer from './footer'


const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.background.default,
  },
  container: {
    margin: '20vh auto',
    marginBottom: 0,
    padding: '0 10vw',
    [theme.breakpoints.down('sm')]: {
      padding: '0 3vw',
    },
    [theme.breakpoints.up('md')]: {
      padding: '0, 10vw',
    },
  },
  main: {
    minHeight: '72vh',
    margin: '20vh auto',
    marginBottom: 0,
    padding: '0 10vw',
    [theme.breakpoints.down('sm')]: {
      padding: '0 3vw',
    },
    [theme.breakpoints.up('md')]: {
      padding: '0, 10vw',
    },
  },
  footerHr: {
    // backgroundColor: '#d91616',
    backgroundColor: theme.colors.footerHr,
    height: 2,
    marginBottom: 0,
    margin: '0 5vw'
  },
}))


const Layout = ({ pageTitle, location, children, themeType }) => {
  const classes = useStyles()

  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
      <hr className={classes.footerHr} />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
