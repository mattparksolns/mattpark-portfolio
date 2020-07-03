import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby'
import { makeStyles, createStyles, Typography, AppBar, Toolbar, Link } from '@material-ui/core'

// import AnnouncementBar from './announcement-bar'
import Socials from '../../components/socials'
import DarkModeSwitch from './dark-mode-switch'
import MobileMenu from './mobile-menu'

// type HeaderProps = {
//     className?: string,
// }

const useStyles = makeStyles(({ palette, breakpoints, spacing }) =>
    createStyles({
        appBar: {
            // backgroundColor: fade(palette.background.default, 0.5),
            background: 'transparent',
            // opacity: 0.9,
            boxShadow: 'none',
            height: '9.02777vw',
            [breakpoints.down('sm')]: {
                height: 86,
            },
        },
        toolbar: {
            height: '100%',
            padding: 0,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        '@keyframes logoAnimation': {
            '10%': {
                backgroundPosition: '10% center',
            },
            '100%': {
                backgroundPosition: '130% center',
            },
        },
        logo: {
            fontFamily: 'tungsten',
            fontSize: 35,
            fontWeight: 900,
            '& > a': {
                color: palette.text.primary,
                background: `linear-gradient(to right, ${palette.text.primary}, ${palette.secondary.main})`,
                backgroundClip: 'text',
                '-webkit-background-clip': 'text',
                backgroundSize: '500% auto',
                textFillColor: 'transparent',
                '-webkit-text-fill-color': 'transparent',
                animation: '$logoAnimation 15.5s linear infinite',
            },
        },
        pageLinks: {
            position: 'absolute',
            left: spacing(16),
            transition: 'opacity .8s cubic-bezier(.19,1,.9,1)',
            [breakpoints.down('xs')]: {
                opacity: 0,
            },
            fontFamily: 'markpro-black',
            '& > a': {
                fontSize: 18,
                marginLeft: spacing(2),
                paddingBottom: spacing(1.5),
                height: '100%',
                borderBottom: '2px solid transparent',
                '&:hover': {
                    borderBottom: `2px solid ${palette.secondary.main}`,
                },
            },
        },
        grow: {
            flexGrow: 1,
        },
        rightNav: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            transition: 'transform .8s cubic-bezier(.19, 1, .9, 1)',
            transform: 'translate(27px)',
            [breakpoints.down('xs')]: {
                transform: 'translate(0)',
            },
        },
        socials: {
            transition: 'all .8s cubic-bezier(.19,1,.9,1)',
            position: 'relative',
            top: 3,
            '& > a': {
                marginRight: 20,
                '& > svg': {
                    fontSize: 20,
                },
            },
        },
    }),
)
const Header = ({ className }) => {
    const classes = useStyles()
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    author {
                        name
                    }
                }
            }
        }
    `)
    const { title, author } = data.site.siteMetadata

    return (
        <AppBar className={`${className} ${classes.appBar}`} color={'inherit'}>
            {/*<AnnouncementBar />*/}
            <Toolbar className={classes.toolbar} component={'nav'}>
                <Typography className={classes.logo} variant="h1">
                    <Link component={GatsbyLink} title={title} to="/">
                        {author.name}
                    </Link>
                </Typography>
                <div className={classes.pageLinks}>
                    <Link component={GatsbyLink} to="/about/">
                        About
                    </Link>
                    <Link component={GatsbyLink} to="/work/">
                        Work
                    </Link>
                    <Link component={GatsbyLink} to="/blog/">
                        Blog
                    </Link>
                    <Link component={GatsbyLink} to="/contact/">
                        Contact
                    </Link>
                </div>
                <div className={classes.grow} />
                <div className={classes.rightNav}>
                    <Socials className={classes.socials} />
                    <DarkModeSwitch />
                    <MobileMenu />
                </div>
            </Toolbar>
        </AppBar>
    )
}
Header.propTypes = {
    className: PropTypes.string,
}
export default Header
