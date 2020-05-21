import { createElement } from 'react'

import { SsrRootWrapper, SsrPageWrapper, BrowserRootWrapper } from "./wrap-with-providers"
export const wrapRootElement = SsrRootWrapper
// export const wrapPageElement = SsrPageWrapper

export const onRenderBody = ({ setPreBodyComponents }) => {
  let codeToRunOnClient = `
    (() => {
      window.__onThemeChange = function() {};
      const setTheme = (newTheme) => {
        window.__theme = newTheme;
        preferredTheme = newTheme;
        window.__onThemeChange(newTheme);
      }
      let preferredTheme;
      try {
        preferredTheme = localStorage.getItem('theme');
      } catch (error) {
        console.error(error);
      }
      window.__setPreferredTheme = (newTheme) => {
        setTheme(newTheme);
        try {
          localStorage.setItem('theme', newTheme);
        } catch (error) {
          console.error(error)
        }
      }
      let prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
      prefersDarkMode.addListener((e) => {
        window.__setPreferredTheme(e.matches ? 'light' : 'dark')
      });
      setTheme(preferredTheme || (prefersDarkMode.matches ? 'dark' : 'light'));
    })();
  `
  const script = createElement('script', {
    key: 'script',
    dangerouslySetInnerHTML: {
      __html: codeToRunOnClient
    }
  })
  setPreBodyComponents([script])
}
