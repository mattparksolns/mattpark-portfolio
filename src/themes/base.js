import { createMuiTheme } from '@material-ui/core'

const getBaseTheme = ({ paletteType }) =>
  createMuiTheme({
    typography: {
      fontFamily: ['Montserrat'].join(','),
      button: {
        fontSize: '1.2rem',
      },
    },
    palette: {
      type: paletteType,
      background: {
        paper: paletteType === 'dark' ? '#1a191f' : 'ghostwhite',
        default: paletteType === 'dark' ? '#131217' : '#ffffff',
      },
      text: {
        primary: paletteType === 'dark' ? '#ffffff' : '#000000',
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
