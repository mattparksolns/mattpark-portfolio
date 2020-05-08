import { createMuiTheme } from '@material-ui/core'

import { montserrat, patuaOne } from '../../content/assets/fonts/'

const themeBase = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat, Arial',
    button: {
      fontSize: '1rem',
    }
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [montserrat, patuaOne],
      },
    },
    MuiIconButtonBase: {
      '&:hover': {
        backgroundColor: 'transparent',
      }
    }
  },
})

export default themeBase
