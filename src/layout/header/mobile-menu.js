import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import classNames from 'classnames'
import { withStyles, IconButton, Menu, MenuItem } from '@material-ui/core'
import { Close, Menu as MenuIcon } from '@material-ui/icons'

const MobileMenu = withStyles((theme) => ({
  icon: {
    display: 'None',
    [theme.breakpoints.down('xs')]: {
      display: 'inline',
    },
    color: '#000000',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  paper: {
    backgroundColor: 'darkgray',
    borderRadius: 0,
    width: '15em',
  },
  item: {
    width: '100%',
    color: theme.colors.link,
    textDecoration: 'None',
    textAlign: 'center',
  },
}))(({ classes, anchorEl, toggleMenu }) => {
  return (
    <>
      <IconButton
        className={classes.icon}
        aria-label="Menu"
        aria-haspopup="true"
        onClick={toggleMenu}
      >{ anchorEl ? <Close /> : <MenuIcon /> }</IconButton>
      <Menu
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={toggleMenu}
        disableScrollLock={true}
        classes={{
          paper: classes.paper,
        }}
      >
        <MenuItem onClick={toggleMenu}><GatsbyLink className={classes.item} to="/about">About</GatsbyLink></MenuItem>
        <MenuItem onClick={toggleMenu}><GatsbyLink className={classes.item} to="/work">Work</GatsbyLink></MenuItem>
        <MenuItem onClick={toggleMenu}><GatsbyLink className={classes.item} to="/blog">Blog</GatsbyLink></MenuItem>
        <MenuItem onClick={toggleMenu}><GatsbyLink className={classes.item} to="/contact">Contact</GatsbyLink></MenuItem>
      </Menu>
    </>
  )
})
export default MobileMenu
