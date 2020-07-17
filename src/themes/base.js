import { createMuiTheme } from '@material-ui/core'

const getBaseTheme = (themeType = 'dark') => {
    const isDark = themeType === 'dark'
    const colors = {
        blackText: '#242424',
        black: '#111111',
        lightBlack: '#242424',
        whiteText: '#ece8e1',
        white: '#ffffff',
        darkWhite: '#ece8e1',
        lighterGrey: '#d0d0d0',
        lightGrey: '#a5a29e',
        grey: '#8b978f',
        darkGrey: '#7e7e7e',
        darkerGrey: '#768079',
        blueBlack: '#0f1923',
        lightPink: '#fe4666',
        valorantPink: '#ff4655', // valorant pink
        // pink: '#d13654', // valorant darker-pink
        // pink: 'rgb(215,0,73)', // jungle-juice pink
        pink: '#ff3388',
        darkPink: '#e4373c',
        darkerPink: '#d13654',
        red: '#ff0034',
    }
    return createMuiTheme({
        typography: {
            fontFamily: ['GT-Walsheim', 'muli', 'montserrat', 'roboto', 'arial', 'sans-serif'].join(','),
            h1: {
                fontFamily: ['GT-Walsheim', 'muli', 'montserrat', 'roboto', 'arial', 'sans-serif'].join(','),
            },
            h2: {
                fontFamily: ['cyberpunk', 'tungsten', 'muli', 'montserrat', 'roboto', 'arial', 'sans-serif'].join(','),
            },
            button: {
                fontSize: '1.2rem',
            },
        },
        isDark: isDark,
        colors,
        palette: {
            type: themeType,
            background: {
                paper: isDark ? colors.lightBlack : colors.darkWhite,
                default: isDark ? colors.black : colors.white,
            },
            text: {
                primary: isDark ? colors.whiteText : colors.blackText,
            },
            primary: {
                main: isDark ? colors.whiteText : colors.blackText,
                contrastText: '#ffffff',
            },
            secondary: {
                main: colors.pink,
            },
            error: {
                main: colors.red,
            },
            warning: {
                main: '#ff9800',
            },
            info: {
                main: '#2196f3',
            },
            success: {
                main: '#4caf50',
            },
            action: {
                // active: isDark ? '#ffffff' : '#121212',
                // hover: isDark ? '#ffffff' : '#121212'
            },
            cursor: {
                mouseIndicator: isDark ? colors.darkerGrey : colors.lightGrey,
                innerMouseIndicator: isDark ? colors.darkWhite : colors.lightBlack,
            },
            contrastThreshold: 3,
            tonalOffset: 0.2,
        },
        overrides: {
            MuiCssBaseline: {
                '@global': {},
            },
            MuiButtonBase: {
                root: {
                    cursor: 'none',
                },
            },
            MuiButton: {
                root: {},
                outlinedSecondary: {
                    '&:hover': {},
                },
            },
            MuiIconButton: {
                root: {
                    // color: isDark ? '#fff' : '#121212',
                    '&:hover': {
                        backgroundColor: 'transparent',
                    },
                },
            },
            MuiLink: {
                root: {
                    textDecoration: 'none',
                    cursor: 'none',
                    '&:hover': {
                        color: colors.pink,
                    },
                },
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
                underline: 'none',
            },
            MuiIconButton: {},
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1280,
                xl: 1920,
            },
        },
    })
}
export default getBaseTheme
