import React from 'react'
import PropTypes from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'

const Projects = withStyles(theme => ({
    root: {
        position: 'relative',
        padding: theme.spacing(5, 0),
        '& > h2': {
            fontFamily: 'tungsten',
            fontSize: '10vw',
            marginTop: theme.spacing(5),
            textAlign: 'center',
        },
        backgroundImage: `linear-gradient(180deg, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
    },
}))(({ classes }) => {
    return (
        <section className={`${classes.root} contentWrapper`}>
            <Typography variant={'h2'}>Project 1</Typography>
            <Typography variant={'h2'}>Project 2</Typography>
            <Typography variant={'h2'}>Project 3</Typography>
            <Typography variant={'h2'}>Project 4</Typography>
            <Typography variant={'h2'}>Project 5</Typography>
        </section>
    )
})
Projects.propTypes = {
    classes: PropTypes.object,
}
export default Projects
