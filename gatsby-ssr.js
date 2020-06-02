import { RootWrapper } from "./src/utils/provider-wrappers"
export const wrapRootElement = RootWrapper

import React, { createElement } from 'react'
import Terser from 'terser'
export const onRenderBody = ({ setPreBodyComponents, setPostBodyComponents }) => {
  let themeScriptFn = () => {
    window.__onThemeChange = () => {};
    window.__setThemeType = themeType => {
      window.__theme = themeType;
      window.__onThemeChange();
      if(themeType === 'dark') {
        document.body.classList.add('dark')
      } else {
        document.body.classList.remove('dark')
      }
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

  // let mouseScriptFn = () => {
  //   let currentMousePos = { x: -1, y: -1 }
  //
  //   $(document).ready(() => {
  //
  //     $("body").hover(() =>{
  //       $(".innerMouseIndicator, .mouseIndicator").addClass("show")
  //     }, () => {
  //       $(".innerMouseIndicator, .mouseIndicator").removeClass("show")
  //     })
  //
  //     $(window).mousemove(e => {
  //       $(".innerMouseIndicator, .mouseIndicator").addClass("show");
  //       let currentX = currentMousePos.x = e.pageX
  //       let currentY = currentMousePos.x = e.pageY - $(window).scrollTop()
  //       $(".innerMouseIndicator").css({"transform":"translate3d(" + currentX + "px, " + currentY + "px, 0)"})
  //       setTimeout(() =>{
  //         $(".mouseIndicator").css({"transform":"translate3d(" + currentX + "px, " + currentY + "px, 0)"})
  //       }, 100)
  //     })
  //
  //     $(".activeMouse").hover(() => {
  //       $(".mouseIndicator").addClass("active")
  //     }, () => {
  //       $(".mouseIndicator").removeClass("active")
  //     })
  //   })
  // }
  // mouseScriptFn = `(${String(mouseScriptFn)})()`
  // mouseScriptFn = Terser.minify(mouseScriptFn).code
  // const MouseScript = createElement('script', {
  //   key: 'theme-script',
  //   dangerouslySetInnerHTML: {
  //     __html: mouseScriptFn
  //   }
  // })
  // setPostBodyComponents([MouseScript])
}
