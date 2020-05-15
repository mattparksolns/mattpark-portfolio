import { createMuiTheme } from '@material-ui/core'

import baseTheme from './base'

const darkTheme = createMuiTheme({
  ...baseTheme,
  overrides: {
    ...baseTheme.overrides,
    MuiButton: {
      label: {
        color: '#000000',
      }
    },
    MuiIconButton: {
      root: {
        color: '#ffffff',
        '&:hover': {
          backgroundColor: 'transparent',
        }
      }
    },
    MuiSvgIcon: {
      root: {
        color: '#ffffff',
      }
    },
  },
  colors: {
    myName: '#ffffff',
    text: '#ffffff',
    footerHr: '#ffffff'
  },
  text: {
    primary: '#ffffff',
    secondary: '#ffffff',
    hover: '#62757f',
    hover2: '#90a4ae',
    hover3: '#c1d5e0',
    inverse: '#000000',
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
