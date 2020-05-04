import { createMuiTheme } from '@material-ui/core'

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      paper: '#131217',
      default: '#131217',
    },
    typography: {
      color: 'white',
    },
    text: {
      primary: '#ffffff',
      secondary: 'gray',
    },
    primary: {
      main: '#131217',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#131217'
    },
    info: {
      main: '#131217'
    },
  },
})