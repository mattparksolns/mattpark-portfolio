import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Typography, Link } from '@material-ui/core'

const Intro = withStyles(theme => ({
  root: {
    position: 'relative',
    // backgroundImage: `linear-gradient(180deg, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
    paddingBottom: theme.spacing(5),
  },
  intro: {
    position: 'relative',
    width: 850,
    fontSize: 89,
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      fontSize: '8.57vw',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      fontSize: '9.2vw',
    },
    '& > a': {
      fontWeight: 900,
    }
  },
  description: {
    position: 'relative',
    textAlign: 'right',
    fontSize: 38.4,
    [theme.breakpoints.down('sm')]: {
      fontSize: '4vw',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '5vw',
      textAlign: 'left',
    },
  },
}))(({ classes }) => {
  return (
    <section className={`${classes.root} contentWrapper`}>
      <Typography className={classes.intro} variant="h1" gutterBottom>
        My name is
        <Link title="LinkedIn" color={"secondary"}
              target={"_blank"} rel={"noopener noreferrer"}
              href={"https://linkedin.com/in/mattparksolutions"}> Matt Park. </Link>
        I'm a New York City based software engineer.
      </Typography>
      <Typography className={classes.description} variant="h1">
        Forward Thinker<br />
        Problem Solver<br />
        Web Tinkerer<br />
      </Typography>
    </section>
  )
})
Intro.propTypes = {
  classes: PropTypes.object,
}
export default Intro
