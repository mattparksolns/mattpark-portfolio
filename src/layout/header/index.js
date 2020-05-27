import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby'
import React from "react"
import {
  withStyles,
  AppBar,
  Toolbar,
  Link,
  Typography,
  SvgIcon
} from '@material-ui/core'
import blueGrey from '@material-ui/core/colors/blueGrey'
import { FiGithub, FaLinkedinIn } from 'react-icons/all'

import DarkModeSwitch from './dark-mode-switch'
import AnnouncementBar from './announcement-bar'
import MobileMenu from './mobile-menu'

const Header = withStyles((theme) => ({
  appBar: {
    background: 'none',
    boxShadow: 'none',
  },
  toolbar: {
    whiteSpace: 'nowrap',
    padding: '7vh 10vw 0',
    [theme.breakpoints.down('sm')]: {
      padding: '0 3vw 0',
    },
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  logo: {
    fontSize: 20,
    '& > a': {
      '&:hover': {
        color: theme.palette.text.primary
      }
    }
  },
  pageLinks: {
    [theme.breakpoints.down('xs')]: {
      display: 'None',
    },
    marginLeft: theme.spacing(5),
    '& > a': {
      fontSize: 16,
      marginLeft: theme.spacing(2),
      paddingBottom: theme.spacing(1.5),
      height: '100%',
      borderBottom: '2px solid transparent',
      '&:hover': {
        borderBottom: theme.isDark ? `2px solid ${blueGrey[200]}` : `2px solid ${blueGrey[600]}`,
      }
    },
  },
  grow: {
    flexGrow: 1,
  },
  socials: {
    '& > a': {
      marginRight: theme.spacing(2),
    },
  }
}))(({ classes }) => {
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

  return (
    <AppBar className={classes.appBar}>
      {/*<AnnouncementBar />*/}
      <Toolbar className={classes.toolbar} component={"nav"}>
        <Typography className={classes.logo} variant="h1">
          <Link component={GatsbyLink} title={siteTitle} to="/">
            Matt Park
          </Link>
        </Typography>
        <div className={classes.pageLinks}>
          <Link component={GatsbyLink} to="/about">About</Link>
          <Link component={GatsbyLink} to="/work">Work</Link>
          <Link component={GatsbyLink} to="/blog">Blog</Link>
          <Link component={GatsbyLink} to="/contact">Contact</Link>
        </div>
        <div className={classes.grow} />
        <div className={classes.socials}>
          <Link title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/mattparksolutions">
            <FiGithub size={20} /></Link>
          <Link title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com/in/mattparksolutions">
            <FaLinkedinIn size={20} /></Link>
        </div>
        <DarkModeSwitch />
        <MobileMenu />
      </Toolbar>
    </AppBar>
  )
})
export default Header
