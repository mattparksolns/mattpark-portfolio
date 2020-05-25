import { createMuiTheme } from '@material-ui/core'

const getBaseTheme = ({ themeType }) => {
  const isDark = themeType === 'dark'
  return createMuiTheme({
    typography: {
      fontFamily: ['Montserrat'].join(','),
      button: {
        fontSize: '1.2rem',
      },
    },
    palette: {
      type: themeType || 'light',
      background: {
        paper: isDark ? '#1a191f' : 'ghostwhite',
        default: isDark ? '#131217' : themeType ? '#ffffff' : 'transparent',
      },
      text: {
        primary: isDark ? '#ffffff' : '#000000',
      },
      primary: {
        main: isDark ? '#ffffff' : '#131217',
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          a: {
            textDecoration: 'none',
          },
          main: {
            '& input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active': {
              '-webkit-box-shadow': '0 0 0 30px transparent inset !important',
            }
          }
        },
      },
    },
    props: {
      MuiLink: {
        underline: "none",
      }
    }
  })
}
export default getBaseTheme
