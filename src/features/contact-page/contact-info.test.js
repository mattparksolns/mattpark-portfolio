import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import ContactInfo from './contact-info'


describe("ContactInfo", () => {
  let tree

  beforeEach(() => {
    tree = renderer.create(<ContactInfo />).toJSON()
  })

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot()
  })
})