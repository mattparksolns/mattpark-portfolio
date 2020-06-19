import React from 'react'
import { withStyles, Typography } from '@material-ui/core'

const Copyright = withStyles(theme => ({
    lineBreak: {
        display: 'block',
        marginBottom: -8,
    },
}))(({ classes }) => {
    return (
        <Typography variant="caption">
            © {new Date().getFullYear()} Matt Park
            <span className={classes.lineBreak} />
            All rights reserved
        </Typography>
    )
})
export default Copyright
