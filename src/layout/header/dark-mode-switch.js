import React  from 'react'
import { connect } from "react-redux";
import { withStyles, Switch } from '@material-ui/core'
import blueGrey from '@material-ui/core/colors/blueGrey'

const DarkModeSwitch = withStyles((theme) => ({
  root: {
    margin: theme.spacing(0, 1, 1, 0),
    padding: 0,
    width: 38,
    height: 22,
  },
  switchBase: {
    padding: 1,
    color: blueGrey[900],
    '&$checked': {
      color: blueGrey[100],
      transform: 'translateX(16px)',
      '& + $track': {
        backgroundColor: theme.palette.grey[600],
        opacity: 1,
      }
    },
  },
  thumb: {
    width: 20,
    height: 20,
  },
  track: {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.grey[600],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
}))(({ classes, dispatch, themeType, ...props }) => {
  return (
    <Switch classes={{ ...classes }}
            checked={themeType === 'dark'}
            onChange={e => window.__setThemeType(themeType === 'dark' ? 'light' : 'dark')}
            inputProps={{ 'aria-label': 'dark-mode switch' }}
            { ...props }/>
  )
})
export default connect(
  state => ({
    themeType: state.app.themeType
  }),
)(DarkModeSwitch)
