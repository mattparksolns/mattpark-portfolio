/**
 * Index component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import {
  makeStyles,
  Grid,
} from '@material-ui/core'

import "./layout.css"
import Header from "./header"
import Footer from './footer'


const useStyles = makeStyles((theme) => ({
  root: {
  },
  container: {
    margin: '22vh auto',
    padding: '0 10vw',
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
    [theme.breakpoints.up('md')]: {
      padding: '0, 10vw',
    },
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()

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
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
