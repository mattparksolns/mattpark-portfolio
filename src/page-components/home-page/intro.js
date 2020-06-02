import React from 'react'
import { withStyles, fade, Typography, Link } from '@material-ui/core'

const Intro = withStyles(theme => ({
  hello: {
    position: 'absolute',
    top: 100,
    fontWeight: 900,
    fontSize: '30vw',
    color: theme.palette.background.default,
    textShadow: `-1px -1px 3px ${theme.palette.text.hello1}, 2px 2px 4px ${theme.palette.text.hello2}`,
    zIndex: -2,
  },
  intro: {
    width: 850,
    fontSize: 76,
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      fontSize: '8vw',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      fontSize: '8.5vw',
    },
    '& > a': {
      fontWeight: 'bold',
    }
  },
  description: {
    textAlign: 'right',
    fontSize: '3vw',
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
    <section className={classes.root}>
      <Typography className={classes.hello} variant={"h1"} data-text={"Hello"}>
        Hello
      </Typography>
      <Typography className={classes.intro} variant="h1" gutterBottom>
        My name is
        <Link title="LinkedIn" color={"secondary"}
              target={"_blank"} rel={"noopener noreferrer"}
              href={"https://linkedin.com/in/mattparksolutions"}> Matt Park. </Link>
        I am from the greater New York area.
      </Typography>
      <Typography className={classes.description} variant="h1">
        Forward Thinker,<br />
        Problem Solver,<br />
        and Web Tinkerer.
      </Typography>
    </section>
  )
})
export default Intro
