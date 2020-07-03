import React from 'react'
import { makeStyles, createStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(() =>
    createStyles({
        lineBreak: {
            display: 'block',
            marginBottom: -8,
        },
    }),
)
const Copyright = () => {
    const classes = useStyles()
    return (
        <Typography variant="caption">
            © {new Date().getFullYear()} Matt Park
            <span className={classes.lineBreak} />
            All rights reserved
        </Typography>
    )
}
export default Copyright
