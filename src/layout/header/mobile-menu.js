import { Link as GatsbyLink } from 'gatsby'
import React, { useState } from "react";
import { withStyles, Link, IconButton, Menu, MenuItem } from '@material-ui/core'
import { Close, Menu as MenuIcon } from '@material-ui/icons'

const MobileMenu = withStyles((theme) => ({
  icon: {
    display: 'None',
    [theme.breakpoints.down('xs')]: {
      display: 'inline',
    },
  },
  paper: {
    borderRadius: 0,
    width: '15rem',
  },
  list: {
    padding: 0,
    '& > li > a': {
      width: '100%',
      textAlign: 'center',
    },
  },
}))(({ classes }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const toggleMenu = (e) => {
    setAnchorEl(anchorEl ? null : e.currentTarget)
  }
  return (
    <>
      <IconButton className={classes.icon}
                  aria-label='menu'
                  aria-haspopup='true'
                  onClick={toggleMenu}>
        { anchorEl ? <Close /> : <MenuIcon /> }</IconButton>
      <Menu anchorEl={anchorEl}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            transitionDuration={600}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={toggleMenu}
            disableScrollLock={true}
            classes={{
              paper: classes.paper,
              list: classes.list,
            }}
      >
        <MenuItem><Link component={GatsbyLink} onClick={toggleMenu} to='/about'>About</Link></MenuItem>
        <MenuItem><Link component={GatsbyLink} onClick={toggleMenu} to='/work'>Work</Link></MenuItem>
        <MenuItem><Link component={GatsbyLink} onClick={toggleMenu} to='/blog'>Blog</Link></MenuItem>
        <MenuItem><Link component={GatsbyLink} onClick={toggleMenu} to='/contact'>Contact</Link></MenuItem>
      </Menu>
    </>
  )
})
export default MobileMenu
