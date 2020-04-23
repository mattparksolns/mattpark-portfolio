import { Link } from "gatsby"
import React, { useState } from "react"
import PropTypes from "prop-types"

import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  MenuList,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core'
import {
  Menu as MenuIcon,
  Email,
  GitHub,
  LinkedIn,
} from '@material-ui/icons'

import AnnouncementBar from "./announcementBar"


const useStyles = makeStyles((theme) => ({
  root: {
  },
  appBar: {
    background: 'transparent',
    padding: '2rem 10vw',
    boxShadow: 'none',
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '6vh',
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
  }
}))

const NavBar = ({ siteTitle }) => {
  const classes = useStyles()
  const [menuAnchorEl, setMenuAnchorEl] = useState(null)

  const isMenuOpen = Boolean(menuAnchorEl)

  const handleClick = (e) => {
    setMenuAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setMenuAnchorEl(null)
  }

  const handleGithubLink = () => {
    window.open('https://github.com/mattparksolutions', '_blank')
  }
  const handleLinkedInLink = () => {
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
          <Typography className={classes.title} variant="button">
            {siteTitle}
          </Typography>
          <div className={classes.grow} />
          <IconButton
            edge="start"
            className={classes.button}
            color="inherit"
            aria-label="GitHub Button"
            onClick={handleGithubLink}
            disableRipple
            disableFocusRipple
          >
            <GitHub />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.button}
            aria-label="LinkedIn Button"
            onClick={handleLinkedInLink}
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
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu"
            className={classes.menu}
            anchorEl={menuAnchorEl}
            keepMounted
            open={Boolean(menuAnchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
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
