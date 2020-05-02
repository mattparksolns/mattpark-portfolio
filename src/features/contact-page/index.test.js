import * as Gatsby from 'gatsby'
import React from 'react'
import renderer from 'react-test-renderer'

import ContactPage from './index'

const createNodeMock= (element) => {
  if (element.type === 'p') {
    return {}
  }
  return null
}

describe("ContactPage", () => {
  it("passes", () => {
    expect(true).toBe(true)
  })
  it("renders correctly", () => {
    const tree = renderer.create(<ContactPage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})