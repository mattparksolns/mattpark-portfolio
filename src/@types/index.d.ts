import { Theme } from '@material-ui/core/styles/createMuiTheme'
declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        isDark: boolean
        colors: Record<string, string>
    }
    interface ThemeOptions {
        isDark: boolean
        colors: Record<string, string>
    }
}

import { Palette } from '@material-ui/core/styles/createPalette'
declare module '@material-ui/core/styles/createPalette' {
    interface Cursor {
        mouseIndicator: string
        innerMouseIndicator: string
    }
    interface Palette {
        cursor: Cursor
    }
    interface PaletteOptions {
        cursor: Cursor
    }
}

declare global {
    type ThemeType = 'light' | 'dark'
    interface Window {
        __theme: ThemeType
        __onThemeChange: () => void
        __setThemeType: (themeType: ThemeType) => void
    }
}
