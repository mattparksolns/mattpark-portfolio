import React from 'react'
import renderer from 'react-test-renderer'

import WorkPage from './index'



describe("WorkPage", () => {
  let tree

  beforeEach(() => {
    tree = renderer.create(<WorkPage />).toJSON()
  })


  it("renders correctly", () => {
    expect(tree).toMatchSnapshot()
  })
})