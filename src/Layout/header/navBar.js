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
  appBar: {
    background: 'transparent',
    padding: '2rem 10vw',
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
    [theme.breakpoints.up('md')]: {
      padding: '0, 10vw',
    },
    boxShadow: 'none',
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '6vh',
    padding: 0,
  },
  homeLink: {
    textDecoration: 'none',
  },
  title: {
    color: 'black',
    fontSize: 16,
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    color: 'black',
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
    textDecoration: 'None',
    width: '100%',
    textAlign: 'center',
  }
}))

const NavBar = ({ siteTitle }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  const isMenuOpen = Boolean(anchorEl)

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleGitHub = () => {
    window.open('https://github.com/mattparksolutions', '_blank')
  }
  const handleLinkedIn = () => {
    window.open('https://linkedin.com/in/mattparksolutions', '_blank')
  }

  return (
    <div className={classes.root}>
      <AnnouncementBar />
      <AppBar
        title={siteTitle}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Link className={classes.homeLink} to="/">
            <Typography className={classes.title} variant="button">
              {siteTitle}
            </Typography>
          </Link>
          <div className={classes.grow} />
          <IconButton
            edge="start"
            className={classes.button}
            color="inherit"
            aria-label="GitHub Button"
            onClick={handleGitHub}
            disableRipple
            disableFocusRipple
          >
            <GitHub />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.button}
            aria-label="LinkedIn Button"
            onClick={handleLinkedIn}
            disableRipple
            disableFocusRipple
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.button}
            color="inherit"
            aria-label="Menu Button"
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
