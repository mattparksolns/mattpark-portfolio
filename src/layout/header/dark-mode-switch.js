import React  from 'react'
import { connect } from "react-redux";
import { withStyles, Switch } from '@material-ui/core'
import { grey, blueGrey } from '@material-ui/core/colors'

const DarkModeSwitch = withStyles(theme => ({
  root: {
    transition: 'all .8s cubic-bezier(.19,1,.9,1)',
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(1)
    },
    padding: 0,
    width: 34,
    height: 20,
  },
  switchBase: {
    padding: 0,
    color: theme.palette.primary.main,
    '&$checked': {
      color: theme.palette.primary.main,
      transform: 'translateX(14px)',
      '& + $track': {
        backgroundColor: theme.palette.background.default,
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
    border: `2px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.background.default,
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
