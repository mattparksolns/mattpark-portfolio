import React from 'react'
import { makeStyles, createStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(({ spacing }) =>
    createStyles({
        root: {},
        placeholder: {
            padding: spacing(5, 0),
            '& > h3': {
                marginTop: '10vh',
                textAlign: 'center',
            },
        },
    }),
)

const WorkPage = () => {
    const classes = useStyles()
    return (
        <div className={`${classes.root} contentWrapper`}>
            <Typography variant={'h2'}>Projects</Typography>
            <div className={classes.placeholder}>
                <Typography variant={'h3'}>Project 1</Typography>
                <Typography variant={'h3'}>Project 2</Typography>
                <Typography variant={'h3'}>Project 3</Typography>
                <Typography variant={'h3'}>Project 4</Typography>
                <Typography variant={'h3'}>Project 5</Typography>
            </div>
        </div>
    )
}
export default WorkPage
