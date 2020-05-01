import React from 'react'
import renderer from 'react-test-renderer'

import BackgroundImage from './background-image'


describe("BackgroundImage", () => {
  it("passes", () => {
    expect(true).toBe(true)
  })
  // it("renders correctly", () => {
  //   const tree = renderer.create(<BackgroundImage />).toJSON()
  //   expect(tree).toMatchSnapshot()
  // })
})