import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, createStyles } from '@material-ui/core'

import Header from './header'
import Footer from './footer'
import Cursor from './cursor'

const useStyles = makeStyles(({ palette, breakpoints }) =>
    createStyles({
        // 'header, footer': {
        //     padding: '0 9.72222vw',
        //     [breakpoints.down('sm')]: {
        //         padding: '0 3vw',
        //     },
        // },
        header: {
            padding: '0 9.722222vw',
            [breakpoints.down('sm')]: {
                padding: '0 3vw',
            },
        },
        footer: ({ path }) => ({
            position: 'relative',
            padding: '0 9.722222vw',
            [breakpoints.up('md')]: {
                padding: path === '/contact/' ? '0 9.722222vw' : '0 16.66666vw',
            },
            [breakpoints.down('sm')]: {
                padding: '0 3vw',
            },
        }),
        main: {
            position: 'relative',
            paddingTop: '11.11111vw',
            [breakpoints.down('sm')]: {
                paddingTop: 100,
            },
            minHeight: '72vh',
            backgroundImage: `linear-gradient(180deg, ${palette.background.default}, ${palette.background.paper})`,
        },
    }),
)
const Layout = ({ path, children, ...props }) => {
    const classes = useStyles({ path, children, ...props })
    return (
        <>
            <Header className={classes.header} />
            <main className={classes.main}>{children}</main>
            <Footer className={classes.footer} path={path} />
            <Cursor path={path} />
        </>
    )
}
Layout.propTypes = {
    path: PropTypes.string,
    children: PropTypes.node.isRequired,
}
export default Layout
