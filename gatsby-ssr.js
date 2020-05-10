import React, { createElement } from 'react'

import wrapWithProviders from "./wrap-with-providers"
export const wrapRootElement = wrapWithProviders

const ThemeScript = () => {
  let codeToRunOnClient = `
    (() => {
      window.__onThemeChange = function() {};
      function setTheme(newTheme) {
        window.__theme = newTheme;
        preferredTheme = newTheme;
        document.body.className = newTheme;
        window.__onThemeChange(newTheme);
      }
      let preferredTheme;
      try {
        preferredTheme = localStorage.getItem('theme');
      } catch (err) { }
      window.__setPreferredTheme = function(newTheme) {
        setTheme(newTheme);
        try {
          localStorage.setItem('theme', newTheme);
        } catch (err) {}
      }
      let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
      darkQuery.addListener((e) => {
        window.__setPreferredTheme(e.matches ? 'light' : 'dark')
      });
      setTheme(preferredTheme || (darkQuery.matches ? 'light' : 'dark'));
    })();
  `
  return (
    <script
      dangerouslySetInnerHTML={{ __html: codeToRunOnClient }}
    />
  )
}

// NOTE: why do i have to pass in a key value
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<ThemeScript key={1} />)
}
