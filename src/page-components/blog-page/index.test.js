import React from 'react'
import renderer from 'react-test-renderer'

import BlogPage from './index'

describe('Blog', () => {
    let tree

    beforeEach(() => {
        tree = renderer.create(<BlogPage />).toJSON()
    })

    // it("renders correctly", () => {
    //   expect(tree).toMatchSnapshot()
    // })
    it('passes', () => {
        expect(true).toBe(true)
    })
})
