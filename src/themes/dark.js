import { createMuiTheme } from '@material-ui/core'

export const darkTheme = createMuiTheme({
  root: {
    backgroundColor: '#131217',
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#131217',
      background: '#ffffff',
    },
    secondary: {
      main: '#131217'
    },
    info: {
      main: '#131217'
    },
  },
})