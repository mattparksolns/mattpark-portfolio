import React  from "react"
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core'

import Cursor from './cursor'
import "./layout.css"
import Header from "./header"
import Footer from './footer'

const Layout = withStyles(theme => ({
  '@global': {
    'header, main, footer': {
      padding: '0 9.72222vw',
      [theme.breakpoints.down('sm')]: {
        padding: '0 3vw',
      },
    },
    footer: {
      position: 'relative',
      [theme.breakpoints.up('md')]: {
        padding: props => props.location.pathname === '/contact/' ? '0 9.72222vw' : '0 16.66666vw',
      }
    },
    main: {
      paddingTop: '11.11111vw',
      [theme.breakpoints.down('sm')]: {
        paddingTop: 100,
      },
      minHeight: '72vh',
    },
  },
}))(({ location, children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <Cursor />
    </>
  )
})
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
