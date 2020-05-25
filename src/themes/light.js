import { createMuiTheme } from '@material-ui/core'

import baseTheme from './base'

const lightTheme = createMuiTheme({
  ...baseTheme,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active':  {
          '-webkit-box-shadow': '0 0 0 30px #131217 inset !important',
        }
      },
    },
    MuiButton: {
      root: {
        borderRadius: 0,
      },
      contained: {
        '& *': {
          color: '#ffffff',
        },
        backgroundColor: '#000000',
        '&:hover': {
          backgroundColor: '#34515e',
        },
      },
    },
  },
  colors: {
    myName: '#000000',
    text: '#000000',
    footerHr: '#000000',
  },
  text: {
    primary: '#000000',
    hover: '#8eacbb',
    hover2: '#607d8b',
    hover3: '#34515e',
    inverse: '#ffffff',
  },
  palette: {
    type: 'light',
    background: {
      paper: 'ghostwhite',
      default: '#ffffff',
    },
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#673ab7',
    },
    error: {
      main: '#ca0909',
    },
    sand: {
      main: '#F4DECB',
    },
    shell: {
      main: '#F8EEE7',
    },
    status: {
      danger: '#b71c1c'
    },
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },

})

export default lightTheme
