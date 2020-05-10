import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby'
import React, { useState, useEffect } from "react"
import { connect } from 'react-redux'
import {
  withStyles,
  AppBar,
  Toolbar,
  Link,
  IconButton,
  Typography,
} from '@material-ui/core'
import {
  GitHub,
  LinkedIn,
} from '@material-ui/icons'

import DarkModeSwitch from './dark-mode-switch'
import AnnouncementBar from './announcement-bar'
import MobileMenu from './mobile-menu'


const NavBar = withStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  appBar: {
    background: 'none',
    paddingLeft: '8.4vw',
    paddingRight: '7.3vw',
    [theme.breakpoints.down('sm')]: {
      padding: '0 0',
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '8.4vw',
      paddingRight: '7.3vw',
    },
    boxShadow: 'none',
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
  },
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 0,
  },
  logo: {
  },
  logoLink: {
    // border: '1px solid black',
    textDecoration: 'none',
    // color: 'black',
    fontSize: 20,
    [theme.breakpoints.up('lg')]: {
      fontSize: 20,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
    }
  },
  links: {
    [theme.breakpoints.down('xs')]: {
      display: 'None',
    },
    marginLeft: '4vw',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    fontSize: 18,
    margin: '1vw',
    paddingTop: '1vh',
    height: '100%',
    // color: 'black',
    textDecoration: 'None',
    borderBottom: '2px solid transparent',
    '&:hover': {
      borderBottom: '2px solid black',
    }
  },
  grow: {
    flexGrow: 1,
  },
  icon: {
    color: 'black',
    marginRight: 10,
  }
}))(({ classes, location, dispatch }) => {
  const data = useStaticQuery(graphql`
      query {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `)

  const siteTitle = data.site.siteMetadata.title

  const [theme, setTheme] = useState(null)
  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  const [anchorEl, setAnchorEl] = useState(null)
  const [isAnnouncementClosed, setIsAnnouncementClosed] = useState(false)

  const closeAnnouncementBar = () => {
    setIsAnnouncementClosed(true)
  }

  const toggleMenu = (e) => {
    setAnchorEl(anchorEl ? null : e.currentTarget)
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          { isAnnouncementClosed
            ? <div />
            : <AnnouncementBar closeAnnouncementBar={closeAnnouncementBar} />
          }
          <div className={classes.navContainer}>
            <Typography className={classes.logo} variant="h1">
              <GatsbyLink title={siteTitle} className={classes.logoLink} to="/">
                Matt Park
              </GatsbyLink>
            </Typography>
            <div className={classes.links}>
              <GatsbyLink className={classes.link} to="/about">About</GatsbyLink>
              <GatsbyLink className={classes.link} to="/work">Work</GatsbyLink>
              <GatsbyLink className={classes.link} to="/blog">Blog</GatsbyLink>
              <GatsbyLink className={classes.link} to="/contact">Contact</GatsbyLink>
            </div>
            <div className={classes.grow} />
            <Link
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mattparksolutions"
            ><GitHub className={classes.icon} /></Link>
            <Link
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/mattparksolutions"
            ><LinkedIn className={classes.icon} /></Link>
            <DarkModeSwitch
              name="darkModeSwitch"
              checked={theme === 'dark'}
              onChange={() => window.__setPreferredTheme(theme === 'dark' ? 'light' : 'dark')}
            />
            <MobileMenu anchorEl={anchorEl} toggleMenu={toggleMenu} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
})
export default connect(
  (state) => ({
    themeType: state.app.themeType,
  }),
  (dispatch) => ({
  }),
)(NavBar)
