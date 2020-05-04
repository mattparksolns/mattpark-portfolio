import React, { useContext } from "react"
import PropTypes from "prop-types"
import {
  makeStyles,
  Button,
} from '@material-ui/core'

import "./layout.css"
// import ThemeContext from '../themes/ThemeContext'
// import { BACKGROUND_TRANSITION_TIME, EASE_IN_OUT_TRANSITION, getTheme } from '../utils/theme'
import Header from "./header"
import Footer from './footer'
import SEO from "./seo"


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


const Layout = ({ pageTitle, location, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  // const { theme, toggleTheme } = useContext(ThemeContext)
  // const { color, background, secondary } = getTheme(theme)
  // const darkTheme = getTheme('dark')

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      <SEO pageTitle={pageTitle} />
      <div className={classes.container}>
        <Button>button</Button>
        <main className={classes.main}>{children}</main>
        <hr className={classes.footerHr} />
        <Footer />
      </div>
    </div>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
