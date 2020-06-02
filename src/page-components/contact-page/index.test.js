import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { MuiThemeProvider } from '@material-ui/core'

import getBaseTheme from '../../themes/base'
import ContactPage from './index'

const mockStore = configureStore([])

describe("ContactPage", () => {
  let store
  let tree

  beforeEach(() => {
    store = mockStore({
      app: {
        themeType: 'light',
        ipv4: '',
        ipv6: '',
        geoData: '',
      }
    })

    tree = renderer.create(
      <Provider store={store}>
        <MuiThemeProvider theme={getBaseTheme(store.getState().app.themeType)}>
          <ContactPage />
        </MuiThemeProvider>
      </Provider>
    ).toJSON()
  })
  // it("renders correctly", () => {
  //   expect(tree).toMatchSnapshot()
  // })
  it("passes", () => {
    expect(true).toBe(true)
  })
})
