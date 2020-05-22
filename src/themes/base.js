import { createMuiTheme } from '@material-ui/core'

const getBaseTheme = ({ themeType }) =>
  createMuiTheme({
    typography: {
      fontFamily: ['Montserrat'].join(','),
      button: {
        fontSize: '1.2rem',
      },
    },
    palette: {
      type: themeType,
      background: {
        paper: themeType === 'dark' ? '#1a191f' : 'ghostwhite',
        default: themeType === 'dark' ? '#131217' : '#ffffff',
      },
      text: {
        primary: themeType === 'dark' ? '#ffffff' : '#000000',
      }
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          a: {
            textDecoration: 'none',
          },
          main: {
            '& input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active':  {
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
export default getBaseTheme
