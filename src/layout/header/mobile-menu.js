import { Link as GatsbyLink } from 'gatsby'
import React, { useState } from "react";
import { withStyles, Link, IconButton, Menu, MenuItem } from '@material-ui/core'
import { Close, Menu as MenuIcon } from '@material-ui/icons'
import { grey, blueGrey } from '@material-ui/core/colors'

const MobileMenu = withStyles(theme => ({
  icon: {
    transition: 'opacity .8s cubic-bezier(.19,1,.9,1)',
    opacity: 0,
    [theme.breakpoints.down('xs')]: {
      opacity: 1,
    },
    padding: 0,
    zIndex: 1300,
  },
  opacityOverlay: {
    position: 'fixed',
    top: '-5vh',
    left: '-70vw',
    height: '120vh',
    width: '120vw',
    backgroundColor: '#000000',
    opacity: theme.isDark ? 0.4 : 0.1,
  },
  paper: {
    borderRadius: 0,
    backgroundColor: theme.palette.background.default,
    // border: theme.isDark && `1px solid ${blueGrey[900]}`,
    width: '60vw',
  },
  list: {
    '&, > li': {
      padding: 0,
    },
    '& > li > a': {
      height: '100%',
      width: '100%',
      textAlign: 'center',
    },
  },
}))(({ classes }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const toggleMenu = e => {
    setAnchorEl(anchorEl ? null : e.currentTarget)
  }
  return (
    <>
      <IconButton className={classes.icon} color={"primary"}
                  aria-label='menu' aria-haspopup='true'
                  onClick={toggleMenu}>
        { anchorEl ? <Close /> : <MenuIcon /> }</IconButton>
      { anchorEl && <div className={classes.opacityOverlay} /> }
      <Menu anchorEl={anchorEl}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            transitionDuration={{ enter: 800, exit: 300 }}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={toggleMenu}
            disableScrollLock={true}
            classes={{
              paper: classes.paper,
              list: classes.list,
            }}>
        <MenuItem><Link component={GatsbyLink} onClick={toggleMenu} to='/about/'>About</Link></MenuItem>
        <MenuItem><Link component={GatsbyLink} onClick={toggleMenu} to='/work/'>Work</Link></MenuItem>
        <MenuItem><Link component={GatsbyLink} onClick={toggleMenu} to='/blog/'>Blog</Link></MenuItem>
        <MenuItem><Link component={GatsbyLink} onClick={toggleMenu} to='/contact/'>Contact</Link></MenuItem>
      </Menu>
    </>
  )
})
export default MobileMenu
