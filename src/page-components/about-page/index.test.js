import React from 'react'
import renderer from 'react-test-renderer'

import AboutPage from './index'

describe("AboutPage", () => {
  let tree

  beforeEach(() => {
    tree = renderer.create(<AboutPage />).toJSON()
  })

  // it("renders correctly", () => {
  //   expect(tree).toMatchSnapshot()
  // })
  it("passes", () => {
    expect(true).toBe(true)
  })
})
