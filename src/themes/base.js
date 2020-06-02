import { createMuiTheme } from '@material-ui/core'
import { grey, red, blueGrey } from '@material-ui/core/colors'


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
        paper: isDark ? '#191919' : '#f8f8f8',
        default: isDark ? '#121212' : '#ffffff',
      },
      text: {
        primary: isDark ? '#ffffff' : '#121212',
        linkHover: isDark ? grey[500] : grey[600],
        logo: isDark ? grey[300] : grey[800],
        hello1: isDark ? grey[900] : grey[300],
        hello2: isDark ? grey[800] : grey[400],
        mouseIndicator: isDark ? grey[700] : grey[400],
        innerMouseIndicator: isDark ? '#ffffff': '#121212',
      },
      primary: {
        main: isDark ? '#ffffff' : '#121212',
        contrastText: '#ffffff',
      },
      secondary: {
        main: isDark ? grey[400] : grey[700],
      },
      error: {
        main: isDark ? red[500] : red[900]
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
        // active: isDark ? '#ffffff' : '#121212',
        // hover: isDark ? '#ffffff' : '#121212'
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            cursor: 'none',
            boxSizing: 'border-box',
            // height: '100vh',
            overflowY: 'scroll',
            overflowX: 'hidden',
            '-ms-text-size-adjust': '100%',
            '-webkit-text-size-adjust': '100%',
          },
          'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active': {
            transition: 'background-color 5000s ease-in-out 0s'
          },
        },
      },
      MuiButtonBase: {
        root: {
          cursor: 'none',
        },
      },
      MuiButton: {
        root: {
          borderRadius: 0,
          width: '10rem',
          height: '3rem',
          fontSize: '1.1rem',
          '& > span': {
            transition: 'all .8s cubic-bezier(.19,1,.9,1)',
            transform: 'translate(12px)',
          },
          '& > span > span > svg': {
            width: 20,
            height: 20,
            opacity: 0,
            transition: 'opacity .5s cubic-bezier(.19,1,.22,1)',
          },
          '&:hover': {
            '& > span': {
              transform: 'translate(0px)'
            },
            '& > span > span > svg': {
              opacity: 1,
            }
          }
        },
        contained: {
          '& > *': {
            color: '#ffffff'
          },
          backgroundColor: '#191919',
          '&:hover': {
            backgroundColor: '#191919',
          }
        },
        outlined: {
          '&:hover': {
          }
        }
      },
      MuiIconButton: {
        root: {
          // color: isDark ? '#fff' : '#121212',
          '&:hover': {
            backgroundColor: 'transparent',
          }
        }
      },
      MuiLink: {
        root: {
          textDecoration: 'none',
          cursor: 'none',
          '&:hover': {
            color: isDark ? grey[500] : grey[600]
          }
        }
      },
      MuiInputBase: {
        input: {
          cursor: 'none',
        },
      },
      MuiFormControlLabel: {
        root: {
          cursor: 'none',
        },
      },
    },
    props: {
      MuiLink: {
        underline: "none",
      },
      MuiIconButton: {

      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      }
    },
  })
}
export default getBaseTheme
