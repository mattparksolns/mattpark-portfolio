import RootWrapper from './src/components/root-wrapper'
export const wrapRootElement = RootWrapper

import ThemeScript from './src/themes/theme-script'
import NoiseBackground from './src/components/noise-background'

export const onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents([ThemeScript, NoiseBackground])
}
