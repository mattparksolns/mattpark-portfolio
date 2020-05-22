import { jssPreset } from '@material-ui/styles'
import { create } from 'jss'

const stylesProviderProps = {
  jss: create({
    ...jssPreset(),
    insertionPoint: process.browser ? document.querySelector('#___gatsby') : null
  })
}
export default stylesProviderProps
