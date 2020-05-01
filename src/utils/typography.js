import Typography from "typography"
// import fairyGateTheme from "typography-theme-fairy-gates"
import kirkhamTheme from 'typography-theme-kirkham'

const typography = new Typography(kirkhamTheme)

if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography

export const { scale, rhythm, options } = typography
