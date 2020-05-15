import { createMuiTheme } from '@material-ui/core'

const themeBase = createMuiTheme({
  typography: {
    fontFamily: ['Montserrat'].join(','),
    button: {
      fontSize: '1.2rem',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        a: {
          textDecoration: 'none',
        },
      },
    }
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
})
export default themeBase
