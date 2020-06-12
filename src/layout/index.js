import React  from "react"
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core'

import Header from "./header"
import Footer from './footer'
import Cursor from './cursor'

const Layout = withStyles(theme => ({
  '@global': {
    'header, footer': {
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
      position: 'relative',
      paddingTop: '11.11111vw',
      [theme.breakpoints.down('sm')]: {
        paddingTop: 100,
      },
      minHeight: '72vh',
      backgroundImage: `linear-gradient(180deg, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
    },
  },
}))(({ classes, location, children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer location={location} />
      <Cursor location={location} />
    </>
  )
})
Layout.propTypes = {
  location: PropTypes.object,
  children: PropTypes.node.isRequired,
}
export default Layout
