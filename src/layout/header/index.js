import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby'
import React from "react"
import {
  withStyles, Typography, fade,
  AppBar, Toolbar, Link,
} from '@material-ui/core'
import { FiGithub, FaLinkedinIn } from 'react-icons/all'

// import AnnouncementBar from './announcement-bar'
import DarkModeSwitch from './dark-mode-switch'
import MobileMenu from './mobile-menu'

const Header = withStyles(theme => ({
  appBar: {
    // backgroundColor: fade(theme.palette.background.default, 0.5),
    background: 'transparent',
    // opacity: 0.9,
    boxShadow: 'none',
    height: '9.02777vw',
    [theme.breakpoints.down('sm')]: {
      height: 86,
    },
  },
  toolbar: {
    height: '100%',
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 20,
    '& > a': {
      color: theme.palette.text.logo,
      '&:hover': {
        color: theme.palette.text.logo,
      },
    },
  },
  pageLinks: {
    position: 'absolute',
    left: theme.spacing(16),
    transition: 'opacity .8s cubic-bezier(.19,1,.9,1)',
    [theme.breakpoints.down('xs')]: {
      opacity: 0,
    },
    '& > a': {
      fontSize: 16,
      marginLeft: theme.spacing(2),
      paddingBottom: theme.spacing(1.5),
      height: '100%',
      borderBottom: '2px solid transparent',
      '&:hover': {
        borderBottom: `2px solid ${theme.palette.text.linkHover}`,
      }
    },
  },
  grow: {
    flexGrow: 1,
  },
  rightNav: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    transition: 'transform .8s cubic-bezier(.19, 1, .9, 1)',
    transform: 'translate(27px)',
    [theme.breakpoints.down('xs')]: {
      transform: 'translate(0)',
    },
  },
  socials: {
    transition: 'all .8s cubic-bezier(.19,1,.9,1)',
    position: 'relative',
    top: 3,
    '& > a': {
      fontSize: 18,
      marginRight: theme.spacing(3),
      [theme.breakpoints.down('xs')]: {
        marginRight: theme.spacing(2),
      },
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
    <AppBar className={classes.appBar} color={"inherit"}>
      {/*<AnnouncementBar />*/}
      <Toolbar className={classes.toolbar} component={"nav"}>
        <Typography className={classes.logo} variant="h1">
          <Link component={GatsbyLink} title={siteTitle} to="/">
            Matt Park
          </Link>
        </Typography>
        <div className={classes.pageLinks}>
          <Link component={GatsbyLink} to="/about/">About</Link>
          <Link component={GatsbyLink} to="/work/">Work</Link>
          <Link component={GatsbyLink} to="/blog/">Blog</Link>
          <Link component={GatsbyLink} to="/contact/">Contact</Link>
        </div>
        <div className={classes.grow} />
        <div className={classes.rightNav}>
          <div className={classes.socials}>
            <Link title="GitHub" target="_blank" rel="noopener noreferrer"
                  href="https://github.com/mattparksolutions"><FiGithub /></Link>
            <Link title="LinkedIn" target="_blank" rel="noopener noreferrer"
                  href="https://linkedin.com/in/mattparksolutions"><FaLinkedinIn /></Link>
          </div>
          <DarkModeSwitch />
          <MobileMenu />
        </div>
      </Toolbar>
    </AppBar>
  )
})
export default Header
