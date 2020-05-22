import React, { useEffect, useContext } from "react";
import { withStyles, Switch } from '@material-ui/core'
import { connect } from "react-redux";
import { ThemeContext } from '../../themes'

import { toggleDarkMode } from "../../store/actions";

const DarkModeSwitch = withStyles((theme) => ({
  root: {
    margin: theme.spacing(0, 1, 1, 0),
    padding: 0,
    width: 42,
    height: 26,
  },
  switchBase: {
    padding: 1,
    color: 'black',
    // border: '5px black solid',
    '&$checked': {
      color: 'white',
      transform: 'translateX(16px)',
      '& + $track': {
        backgroundColor: 'gray',
        opacity: 1,
      }
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.grey[700],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border'])
  },
  checked: {},
}))(({ classes, ...props }) => {
  const { themeType, setThemeType } = useContext(ThemeContext)
  // useEffect(() => {
  //   toggleDarkMode(window.__theme)
  //   window.__onThemeChange = () => {
  //     toggleDarkMode(window.__theme)
  //   }
  // }, [toggleDarkMode])
  return (
    <Switch classes={{ ...classes }}
            checked={themeType === 'dark'}
            onChange={e => window.__setPreferredTheme(themeType === 'dark' ? 'light' : 'dark')}
            inputProps={{ 'aria-label': 'dark-mode switch' }}
            { ...props }/>
  )
})
export default DarkModeSwitch
// export default connect(
//   state => ({
//     paletteType: state.app.paletteType
//   }),
//   dispatch => ({
//     // toggleDarkMode: paletteType => dispatch(toggleDarkMode(paletteType)),
//   })
// )(DarkModeSwitch)
