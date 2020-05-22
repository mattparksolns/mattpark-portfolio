import { createElement } from 'react'

import { SsrRootWrapper, SsrPageWrapper, BrowserRootWrapper } from "./src/utils/provider-wrappers"
export const wrapRootElement = SsrRootWrapper

export const onRenderBody = ({ setPreBodyComponents }) => {
  const themeScript = createElement('script', {
    key: 'themeScript',
    dangerouslySetInnerHTML: {
      __html: `
        (() => {
          window.__onThemeChange = () => {};
          const setTheme = themeType => {
            window.__theme = themeType;
            preferredTheme = themeType;
            window.__onThemeChange(themeType);
            document.documentElement.style.setProperty('--initial-theme-type', themeType);
            document.documentElement.style.setProperty('--color-bg', themeType === 'dark' ? 'black' : 'white');
          }
          let preferredTheme;
          try {
            preferredTheme = localStorage.getItem('theme');
          } catch (error) {
            console.error(error);
          }
          window.__setPreferredTheme = themeType => {
            setTheme(themeType);
            try {
              localStorage.setItem('theme', themeType);
            } catch (error) {
              console.error(error)
            }
          }
          let prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
          prefersDarkTheme.addListener(e => {
            window.__setPreferredTheme(e.matches ? 'light' : 'dark')
          });
          setTheme(preferredTheme || (prefersDarkTheme.matches ? 'dark' : 'light'));
        })();
      `
    }
  })
  setPreBodyComponents([themeScript])
}
