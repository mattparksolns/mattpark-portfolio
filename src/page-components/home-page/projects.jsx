import React from 'react'
import { makeStyles, createStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(({ palette, spacing }) =>
    createStyles({
        root: {
            position: 'relative',
            padding: spacing(5, 0),
            '& > h2': {
                fontFamily: 'tungsten',
                fontSize: '10vw',
                marginTop: spacing(5),
                textAlign: 'center',
            },
            backgroundImage: `linear-gradient(180deg, ${palette.background.default}, ${palette.background.paper})`,
        },
    }),
)
const Projects = () => {
    const classes = useStyles()
    return (
        <section className={`${classes.root} contentWrapper`}>
            <Typography variant={'h2'}>Project 1</Typography>
            <Typography variant={'h2'}>Project 2</Typography>
            <Typography variant={'h2'}>Project 3</Typography>
            <Typography variant={'h2'}>Project 4</Typography>
            <Typography variant={'h2'}>Project 5</Typography>
        </section>
    )
}
export default Projects
