import { Link, graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core'
import {
  Menu as MenuIcon,
  Close,
  GitHub,
  LinkedIn,
  ToggleOn,
  ToggleOff,
} from '@material-ui/icons'

import { toggleDarkMode } from "../../actions";
import AnnouncementBar from './announcement-bar'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  empty: {
  },
  appBar: {
    background: 'transparent',
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
  announcementBar: {
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
    color: 'black',
    fontFamily: 'Montserrat',
    fontSize: 20,
    [theme.breakpoints.up('lg')]: {
      fontSize: 20,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
    }
  },
  links: {
    [theme.breakpoints.down('sm')]: {
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
    color: 'black',
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
    color: '#181818',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  menuIcon: {
    display: 'None',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  menu: {
    borderRadius: 0,
    width: '40vw',
    [theme.breakpoints.down('xs')]: {
      width: '60vw',
    }
  },
  menuItem: {
    width: '100%',
    color: 'black',
    textDecoration: 'None',
    textAlign: 'center',
  },
}))

const NavBar = ({ location, dispatch, isDarkMode, toggleDarkMode }) => {
  const classes = useStyles()

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

  const isMenuOpen = Boolean(anchorEl)

  const toggleTheme = () => {
    toggleDarkMode(!isDarkMode)
  }

  const closeAnnouncementBar = () => {
    console.log('handleCloseAnnouncementBar: ')
    setIsAnnouncementClosed(true)
  }

  const toggleMenu = (e) => {
    if(isMenuOpen) {
      setAnchorEl(null)
    } else {
      setAnchorEl(e.currentTarget)
    }
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          { isAnnouncementClosed
            ? <div className={classes.empty} />
            : <AnnouncementBar className={classes.announcementBar} closeAnnouncementBar={closeAnnouncementBar} />
          }
          <div className={classes.navContainer}>
            <Typography id="my-name" className={classes.logo} variant="h1">
              <Link title={siteTitle} className={classes.logoLink} to="/">
                Matt Park
              </Link>
            </Typography>
            <div className={classes.links}>
              <Link className={classes.link} to="/about">
                About
              </Link>
              <Link className={classes.link} to="/work">
                Work
              </Link>
              <Link className={classes.link} to="/blog">
                Blog
              </Link>
              <Link className={classes.link} to="/contact">
                Contact
              </Link>
            </div>
            <div className={classes.grow} />
            <a
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mattparksolutions"
            >
              <IconButton
                edge="start"
                className={classes.icon}
                color="inherit"
                aria-label="GitHub Icon"
                disableRipple
                disableFocusRipple
              >
                <GitHub />
              </IconButton>
            </a>
            <a
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/mattparksolutions"
            >
              <IconButton
                edge="start"
                className={classes.icon}
                aria-label="LinkedIn Icon"
                disableRipple
                disableFocusRipple
              >
                <LinkedIn />
              </IconButton>
            </a>
            <IconButton
              edge="start"
              className={classes.icon}
              aria-label="Theme Toggle Icon"
              onClick={toggleTheme}
              disableRipple
              disableFocusRipple
            >
              { isDarkMode ? <ToggleOn /> : <ToggleOff />}
            </IconButton>
            <IconButton
              edge="start"
              className={`${classes.icon} ${classes.menuIcon}`}
              color="inherit"
              aria-label="Menu Icon"
              aria-haspopup="true"
              onClick={toggleMenu}
              disableRipple
              disableFocusRipple
            >
              { anchorEl ? <Close /> : <MenuIcon /> }
            </IconButton>
            <Menu
              id="menu"
              anchorEl={anchorEl}
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              open={isMenuOpen}
              onClose={toggleMenu}
              disableScrollLock={true}
              PaperProps={{ className: classNames(classes.menu) }}
            >
              <MenuItem className={classes.menuItem}>
                <Link className={classes.menuItem} to="/about">About</Link>
              </MenuItem>
              <MenuItem>
                <Link className={classes.menuItem} to="/work">Work</Link>
              </MenuItem>
              <MenuItem>
                <Link className={classes.menuItem} to="/blog">Blog</Link>
              </MenuItem>
              <MenuItem>
                <Link className={classes.menuItem} to="/contact">Contact</Link>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isDarkMode: state.app.isDarkMode,
})

const mapDispatchToProps = (dispatch) => ({
  toggleDarkMode: isDarkMode => dispatch(toggleDarkMode(isDarkMode)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)