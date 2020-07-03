import React from 'react'
import Terser from 'terser'

const themeScriptFn = () => {
    window.__onThemeChange = () => {}
    window.__setThemeType = themeType => {
        window.__theme = themeType
        window.__onThemeChange()
        if (themeType === 'dark') {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
        try {
            localStorage.setItem('themeType', themeType)
        } catch (error) {
            console.error(error)
        }
    }
    let preferredTheme
    try {
        preferredTheme = localStorage.getItem('themeType')
    } catch (error) {
        console.error(error)
    }
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    mql.addEventListener('change', event => {
        window.__setThemeType(event.matches ? 'dark' : 'light')
    })
    window.__setThemeType(preferredTheme || (mql.matches ? 'dark' : 'light'))
}

const themeScriptString = `(${String(themeScriptFn)})()`
const minifiedThemeScriptString = Terser.minify(themeScriptString).code

const ThemeScript = (
    <script
        key={'theme-script'}
        dangerouslySetInnerHTML={{
            __html: minifiedThemeScriptString,
        }}
    />
)
export default ThemeScript
