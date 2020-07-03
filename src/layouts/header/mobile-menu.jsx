import React, { useState } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { makeStyles, createStyles, useMediaQuery, Link, IconButton, Menu, MenuItem } from '@material-ui/core'
import { Close, Menu as MenuIcon } from '@material-ui/icons'

const useStyles = makeStyles(({ palette, isDark, breakpoints }) =>
    createStyles({
        icon: {
            transition: 'opacity .8s cubic-bezier(.19,1,.9,1)',
            opacity: 0,
            [breakpoints.down('xs')]: {
                opacity: 1,
            },
            padding: 0,
            zIndex: 1300,
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
        overlay: {
            position: 'fixed',
            top: '-5vh',
            left: '-70vw',
            height: '120vh',
            width: '120vw',
            backgroundColor: '#000000',
            opacity: 0,
            // opacity: isDark ? 0.4 : 0.1,
            pointerEvents: 'none',
        },
        overlayVisible: {
            opacity: isDark ? 0.4 : 0.1,
        },
        paper: {
            // boxSizing: 'border-box',
            borderRadius: 0,
            boxShadow: 'none',
            background: isDark ? palette.background.default : palette.background.paper,
            outline: isDark ? `rgba(255, 255, 255, 0.12) solid 1px` : `rgba(0, 0, 0, 0.12) solid 1px`,
            width: '50vw',
        },
        list: {
            '&, & li, & a': {
                padding: 0,
            },
            '& > li > a': {
                fontFamily: 'markpro-black',
                height: '100%',
                width: '100%',
                textAlign: 'center',
            },
        },
    }),
)
const MobileMenu = () => {
    const classes = useStyles()
    const isXs = useMediaQuery(({ breakpoints }) => breakpoints.down('xs'))
    const [anchorElement, setAnchorElement] = useState()
    const toggleMenu = event => {
        setAnchorElement(anchorElement ? undefined : event.currentTarget)
    }
    return (
        <>
            <IconButton
                className={classes.icon}
                color={'primary'}
                aria-label="menu"
                aria-haspopup="true"
                disabled={!isXs}
                onClick={toggleMenu}
            >
                {anchorElement ? <Close /> : <MenuIcon />}
            </IconButton>
            <div className={`${classes.overlay} ${anchorElement && classes.overlayVisible}`} />
            {/*{anchorElement && <div className={classes.opacityOverlay} />}*/}
            <Menu
                anchorEl={anchorElement}
                getContentAnchorEl={undefined}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                transitionDuration={{ enter: 800, exit: 300 }}
                keepMounted
                open={Boolean(anchorElement)}
                onClose={toggleMenu}
                disableScrollLock={true}
                classes={{
                    paper: classes.paper,
                    list: classes.list,
                }}
            >
                <MenuItem onClick={toggleMenu} divider>
                    <Link component={GatsbyLink} to="/about/">
                        About
                    </Link>
                </MenuItem>
                <MenuItem onClick={toggleMenu} divider>
                    <Link component={GatsbyLink} to="/work/">
                        Work
                    </Link>
                </MenuItem>
                <MenuItem onClick={toggleMenu} divider>
                    <Link component={GatsbyLink} to="/blog/">
                        Blog
                    </Link>
                </MenuItem>
                <MenuItem onClick={toggleMenu} divider>
                    <Link component={GatsbyLink} to="/contact/">
                        Contact
                    </Link>
                </MenuItem>
            </Menu>
        </>
    )
}
export default MobileMenu
