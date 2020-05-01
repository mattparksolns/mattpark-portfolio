import React from "react"
import PropTypes from "prop-types"
import {
  makeStyles,
} from '@material-ui/core'

import "./layout.css"
import Header from "./header"
import Footer from './footer'


const useStyles = makeStyles((theme) => ({
  root: {
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
  },
  footerHr: {
    // backgroundColor: '#d91616',
    backgroundColor: 'black',
    height: 2,
    marginBottom: 0,
    margin: '0 5vw'
  },
}))


const Layout = ({ location, children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.container}>
        <main className={classes.main}>{children}</main>
        <hr className={classes.footerHr} />
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
