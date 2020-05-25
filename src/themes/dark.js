import { createMuiTheme } from '@material-ui/core'

import baseTheme from './base'

const darkTheme = createMuiTheme({
  ...baseTheme,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        main: {
          '& input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active':  {
            '-webkit-box-shadow': '0 0 0 30px transparent inset !important',
          }
        }
      },
    },
    MuiButton: {
      root: {
        borderRadius: 0,
      },
      contained: {
        '& *': {
          color: '#000000',
        },
        backgroundColor: '#ffffff',
        '&:hover': {
          backgroundColor: '#c1d5e0',
        },
      },
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
      main: '#ffffff',
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
