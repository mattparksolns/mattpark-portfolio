import React from 'react'
import {
  makeStyles,
  Typography,
} from '@material-ui/core'

import BackgroundImage from "./background-image"
import { toggleDarkMode } from "../../actions";
import { connect } from "react-redux";


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  backgroundImage: {
    // position: 'absolute',
    height: '60vh',
  },
  text: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '70%',
    fontSize: '5.5vw',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      fontSize: '7.5vw',
    },
    [theme.breakpoints.down('xs')]: {
      fontsize: '12.5vw',
    },
    fontFamily: 'Montserrat',
  },
  name: {
    color: 'darkgray',
    textDecoration: 'none',
  },
  nameDark:{
    color: 'white',
    textDecoration: 'none',
  },
  description: {
    // color: 'ghostwhite',
    fontFamily: 'Montserrat',
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
}))

const Greeting = ({ themeType }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <BackgroundImage className={classes.backgroundImage} />
      <Typography className={classes.text} variant="h1" gutterBottom>
        My name is
        <a title="LinkedIn" className={themeType === 'light' ? classes.name : classes.nameDark} href="https://linkedin.com/in/mattparksolutions"><b> Matt Park. </b></a>
        I am from the greater New York area.
      </Typography>
      <Typography className={classes.description} variant="h2" gutterBottom>
        Forward Thinker,
        <br />
        Problem Solver,
        <br />
        and Web Tinkerer.
      </Typography>
    </div>
  )
}

// export default Greeting

const mapStateToProps = (state) => ({
  themeType: state.app.themeType,
})

const mapDispatchToProps = (dispatch) => ({
  // toggleDarkMode: themeType => dispatch(toggleDarkMode(themeType)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting)