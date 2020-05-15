import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, IconButton, Menu, MenuItem } from '@material-ui/core'
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
    width: '15em',
  },
  link: {
    width: '100%',
    color: theme.text.primary,
    textDecoration: 'None',
    textAlign: 'center',
  },
}))(({ classes, anchorEl, toggleMenu }) => {
  return (
    <>
      <IconButton
        className={classes.icon}
        aria-label='menu'
        aria-haspopup='true'
        onClick={toggleMenu}
      >{ anchorEl ? <Close /> : <MenuIcon /> }</IconButton>
      <Menu
        anchorEl={anchorEl}
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
        }}
      >
        <MenuItem onClick={toggleMenu}><Link className={classes.link} to='/about'>About</Link></MenuItem>
        <MenuItem onClick={toggleMenu}><Link className={classes.link} to='/work'>Work</Link></MenuItem>
        <MenuItem onClick={toggleMenu}><Link className={classes.link} to='/blog'>Blog</Link></MenuItem>
        <MenuItem onClick={toggleMenu}><Link className={classes.link} to='/contact'>Contact</Link></MenuItem>
      </Menu>
    </>
  )
})
MobileMenu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
}
export default MobileMenu
