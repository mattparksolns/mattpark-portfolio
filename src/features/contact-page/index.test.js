import * as Gatsby from 'gatsby'
import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import ContactPage from './index'


const mockStore = configureStore([])

describe("ContactPage", () => {
  let store
  let tree

  beforeEach(() => {
    store = mockStore({
      ipv4: '',
      ipv6: '',
      geoData: '',
    })

    tree = renderer.create(
      <Provider store={store}>
        <ContactPage />
      </Provider>
    ).toJSON()
  })

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot()
  })
})