import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { MuiThemeProvider } from '@material-ui/core'

import { getTheme } from '../../themes'
import ContactPage from './index'

const mockStore = configureStore([])

describe("ContactPage", () => {
  let store
  let tree

  beforeEach(() => {
    store = mockStore({
      app: {
        paletteType: 'light',
        ipv4: '',
        ipv6: '',
        geoData: '',
      }
    })

    tree = renderer.create(
      <Provider store={store}>
        <MuiThemeProvider theme={getTheme(store.getState().app.paletteType)}>
          <ContactPage />
        </MuiThemeProvider>
      </Provider>
    ).toJSON()
  })

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot()
  })
})
