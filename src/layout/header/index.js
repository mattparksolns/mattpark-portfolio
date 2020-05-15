import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby'
import React, { useState } from "react"
import { connect } from 'react-redux'
import {
  withStyles,
  AppBar,
  Toolbar,
  Link,
  Typography,
} from '@material-ui/core'
import { GitHub, LinkedIn } from '@material-ui/icons'

import DarkModeSwitch from './dark-mode-switch'
import AnnouncementBar from './announcement-bar'
import MobileMenu from './mobile-menu'

const Header = withStyles((theme) => ({
  appBar: {
    background: 'none',
    boxShadow: 'none',
  },
  toolbar: {
    padding: '0 10vw 0',
    [theme.breakpoints.down('sm')]: {
      padding: '0 3.5vw 0',
    },
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  logo: {
  },
  logoLink: {
    textDecoration: 'none',
    color: theme.text.primary,
    fontSize: 20,
  },
  links: {
    [theme.breakpoints.down('xs')]: {
      display: 'None',
    },
    marginLeft: theme.spacing(3),
    height: '100%',
    alignItems: 'center',
  },
  link: {
    fontSize: 16,
    marginLeft: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    height: '100%',
    color: theme.text.primary,
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
    marginRight: 10,
  }
}))(({ classes, location, themeType }) => {
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

  const [anchorEl, setAnchorEl] = useState(null)
  const [isAnnouncementClosed, setIsAnnouncementClosed] = useState(false)
  const closeAnnouncementBar = () => {
    setIsAnnouncementClosed(true)
  }

  const toggleMenu = (e) => {
    setAnchorEl(anchorEl ? undefined : e.currentTarget)
  }

  return (
    <AppBar className={classes.appBar} role={"banner"}>
      { isAnnouncementClosed
        ? <></>
        : <AnnouncementBar closeAnnouncementBar={closeAnnouncementBar} />
      }
      <Toolbar className={classes.toolbar} component={"nav"} role={"navigation"}>
        <Typography className={classes.logo} variant="h1">
          <GatsbyLink title={siteTitle} className={classes.logoLink} to="/">
            Matt Park
          </GatsbyLink>
        </Typography>
        <Typography className={classes.links} variant="h2" component="h1">
          <GatsbyLink className={classes.link} to="/about">About</GatsbyLink>
          <GatsbyLink className={classes.link} to="/work">Work</GatsbyLink>
          <GatsbyLink className={classes.link} to="/blog">Blog</GatsbyLink>
          <GatsbyLink className={classes.link} to="/contact">Contact</GatsbyLink>
        </Typography>
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
          checked={themeType === 'dark'}
          onChange={() => window.__setPreferredTheme(window.__theme === 'dark' ? 'light' : 'dark')}
          inputProps={{ 'aria-label': 'dark-mode switch'}}
        />
        <MobileMenu anchorEl={anchorEl} toggleMenu={toggleMenu} />
      </Toolbar>
    </AppBar>
  )
})
export default connect(
  (state) => ({
    themeType: state.app.themeType
  }),
)(Header)
