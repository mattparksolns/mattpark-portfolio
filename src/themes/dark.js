import { createMuiTheme } from '@material-ui/core'

import baseTheme from './base'

const darkTheme = createMuiTheme({
  ...baseTheme,
  overrides: {
    MuiButton: {
      text: {
        color: '#ffffff',
      }
    },
  },
  colors: {
    myName: '#ffffff',
    link: 'ghostwhite',
    text: '#ffffff',
    footerHr: '#ffffff'
  },
  text: {
    primary: '#ffffff',
    secondary: '#ffffff',
  },
  palette: {
    type: 'dark',
    background: {
      paper: '#1a191f',
      default: '#131217',
    },
    primary: {
      main: '#131217',
    },
    secondary: {
      main: '#131217'
    },
    info: {
      main: '#131217'
    },
  },
})

export default darkTheme
