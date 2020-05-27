import { RootWrapper } from "./src/utils/provider-wrappers"
export const wrapRootElement = RootWrapper

import React, { createElement } from 'react'
import Terser from 'terser'
export const onRenderBody = ({ setPreBodyComponents }) => {
  let themeScriptFn = () => {
    window.__onThemeChange = () => {};
    window.__setThemeType = themeType => {
      window.__theme = themeType;
      window.__onThemeChange();
      document.body.style.setProperty(
        '--color-bg',
        themeType === 'dark' ? '#121317' : '#ffffff')
      try {
        localStorage.setItem('themeType', themeType);
      } catch (error) {
        console.error(error);
      }
    }
    let preferredTheme
    try {
      preferredTheme = localStorage.getItem('themeType')
    } catch (error) {
      console.error(error)
    }
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    mql.addEventListener('change', e => {
      window.__setThemeType(e.matches ? 'dark' : 'light');
    })
    window.__setThemeType(preferredTheme || (mql.matches ? 'dark' : 'light'))
  }
  themeScriptFn = `(${String(themeScriptFn)})()`
  themeScriptFn = Terser.minify(themeScriptFn).code

  const ThemeScript = createElement('script', {
    key: 'theme-script',
    dangerouslySetInnerHTML: {
      __html: themeScriptFn
    }
  })
  setPreBodyComponents([ThemeScript])
}

