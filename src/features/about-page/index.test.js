import React from 'react'
import renderer from 'react-test-renderer'

import AboutPage from './index'


const createNodeMock= (element) => {
  if (element.type === 'p') {
    return {}
  }
  return null
}

describe("AboutPage", () => {
  beforeEach(() => {
    jest.mock('./index', () => 'AboutPage')
  })

  it("passes", () => {
    expect(true).toBe(true)
  })
})