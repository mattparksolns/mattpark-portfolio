import { Link } from "gatsby"
import React, { useState } from "react"
import PropTypes from "prop-types"

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
} from '@material-ui/icons'

import AnnouncementBar from "./announcementBar"


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  empty: {
  },
  appBar: {
    background: 'transparent',
    // padding: '2rem 10vw',
    // [theme.breakpoints.down('sm')]: {
    //   padding: '2rem 3vw',
    // },
    // [theme.breakpoints.up('md')]: {
    //   padding: '2rem, 10vw',
    // },
    boxShadow: 'none',
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
  },
  announcementBar: {
    // zIndex: 9,
  },
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: '10vh',
    padding: 0,
  },
  homeLink: {
    textDecoration: 'none',
  },
  title: {
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
  grow: {
    flexGrow: 1,
  },
  icon: {
    color: '#181818',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  menu: {
    width: '30vw',
  },
  menuItem: {
  },
  link: {
    color: 'black',
    textDecoration: 'None',
    width: '100%',
    textAlign: 'center',
  }
}))

const NavBar = ({ siteTitle }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [isHidden, setIsHidden] = useState(false)

  const isMenuOpen = Boolean(anchorEl)

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleCloseAnnouncementBar = () => {
    console.log('handleCloseAnnouncementBar: ')
    setIsHidden(true)
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          { isHidden
            ? <div className={classes.empty} />
            : <AnnouncementBar className={classes.announcementBar} handleCloseAnnouncementBar={handleCloseAnnouncementBar} />
          }
          <div className={classes.navContainer}>
            <Link title="Matt Park - Software Engineer" className={classes.homeLink} to="/">
              <Typography className={classes.title} variant="button">
                {siteTitle}
              </Typography>
            </Link>
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
              color="inherit"
              aria-label="Menu Icon"
              aria-haspopup="true"
              onClick={handleClick}
              disableRipple
              disableFocusRipple
            >
              { isMenuOpen ? <Close /> : <MenuIcon /> }
              {/*<MenuIcon />*/}
            </IconButton>
            <Menu
              id="menu"
              className={classes.menu}
              anchorEl={anchorEl}
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                style: {
                  width: '20vw',
                }
              }}
            >
              <MenuItem className={classes.menuItem}>
                <Link className={classes.link} to="/about">About</Link>
              </MenuItem>
              <MenuItem>
                <Link className={classes.link} to="/blog">Blog</Link>
              </MenuItem>
              <MenuItem>
                <Link className={classes.link} to="/contact">Contact</Link>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

    </div>
  )
}

NavBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
  siteTitle: ``,
}

export default NavBar
