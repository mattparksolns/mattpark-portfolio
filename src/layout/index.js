/**
 * Index component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

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
    margin: '22vh auto',
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


const Layout = ({ pageTitle, children }) => {
  const classes = useStyles()

  // useEffect(() => {
  // },[])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={classes.root}>
      <Header siteTitle={data.site.siteMetadata.title} />
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
