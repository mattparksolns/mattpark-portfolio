import React from 'react'
import renderer from 'react-test-renderer'

import WorkPage from './index'



describe("WorkPage", () => {
  it("passes", () => {
    expect(true).toBe(true)
  })

  it("renders correctly", () => {
    const tree = renderer.create(<WorkPage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})