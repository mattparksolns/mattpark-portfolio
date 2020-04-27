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
      padding: '2rem 3vw',
    },
    [theme.breakpoints.up('md')]: {
      padding: '2rem, 10vw',
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

  return (
    <div className={classes.root}>
      <AnnouncementBar />
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
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
              className={classes.button}
              color="inherit"
              aria-label="GitHub Button"
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
              className={classes.button}
              aria-label="LinkedIn Button"
              disableRipple
              disableFocusRipple
            >
              <LinkedIn />
            </IconButton>
          </a>
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
