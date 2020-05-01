import React from 'react'
import renderer from 'react-test-renderer'

import ContactPage from './index'


describe("ContactPage", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ContactPage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})