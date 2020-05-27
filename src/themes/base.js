import { createMuiTheme } from '@material-ui/core'
import blueGrey from '@material-ui/core/colors/blueGrey'

const getBaseTheme = ({ themeType }) => {
  const isDark = themeType === 'dark'
  return createMuiTheme({
    typography: {
      fontFamily: ['Montserrat'].join(','),
      button: {
        fontSize: '1.2rem',
      },
    },
    isDark: isDark,
    palette: {
      type: themeType || 'light',
      background: {
        paper: isDark ? '#1a191f' : '#f8f8ff',
        default: isDark ? '#131217' : themeType ? '#ffffff' : 'transparent',
      },
      text: {
        primary: isDark ? '#fff' : '#000',
        linkHover: isDark ? blueGrey[200] : blueGrey[600]
      },
      primary: {
        main: isDark ? '#fff' : '#131217',
        contrastText: '#fff',
      },
      secondary: {
        main: '#637ab7'
      },
      error: {
        main: '#ca0909'
      },
      sand: {
        main: '#f4decb'
      },
      shell: {
        main: '#f8eee7'
      },
      status: {
        danger: '#b71c1c'
      },
      action: {
        // active: isDark ? '#ffffff' : '#131217',
        // hover: isDark ? '#ffffff' : '#131217'
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          a: {
            textDecoration: 'none',
          },
          main: {
          },
          'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active': {
            '-webkit-box-shadow': '0 0 0 30px var(--color-bg) inset !important',
          },
        },
      },
      MuiButton: {
        root: {
          borderRadius: 0,
        },
        contained: {
          '& > *': {
            color: isDark ? '#000' : '#fff'
          },
          backgroundColor: isDark ? '#fff' : '#000',
          '&:hover': {
            backgroundColor: isDark ? '#fff' : '#000',
          //   backgroundColor: isDark ? blueGrey[900] : 'transparent',
          //   '& > *': {
          //     color: isDark ? blueGrey[200] : blueGrey[900]
          //   }
          }
        }
      },
      MuiIconButton: {
        root: {
          color: isDark ? '#fff' : '#000',
          '&:hover': {
            backgroundColor: 'transparent',
          }
        }
      },
      MuiLink: {
        root: {
          '&:hover': {
            color: isDark ? blueGrey[200] : blueGrey[600]
          }
        }
      }
    },
    props: {
      MuiLink: {
        underline: "none",
      },
      MuiIconButton: {

      }
    }
  })
}
export default getBaseTheme
