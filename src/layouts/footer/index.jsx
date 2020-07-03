import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, createStyles, Divider } from '@material-ui/core'

import ContactMe from './contact-me'
import Copyright from './copyright'

// type FooterProps = {
//     className?: string
//     path: string
// }

const useStyles = makeStyles(({ palette }) =>
    createStyles({
        root: {
            background: `linear-gradient(180deg, ${palette.background.paper}, ${palette.background.default})`,
        },
        divider: {
            backgroundColor: palette.secondary.main,
            height: 2,
            marginBottom: 5,
        },
    }),
)

const Footer = ({ className, path }) => {
    const classes = useStyles()
    return (
        <footer className={`${className} ${classes.root}`}>
            {path !== '/contact/' && <ContactMe />}
            <Divider className={classes.divider} />
            <Copyright />
        </footer>
    )
}
Footer.propTypes = {
    className: PropTypes.string,
    path: PropTypes.string.isRequired,
}
export default Footer
