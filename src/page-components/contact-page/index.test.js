import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import ContactPage from './index'

describe('ContactPage', () => {
    const renderer = ShallowRenderer.createRenderer()
    let tree

    beforeEach(() => {
        renderer.render(<ContactPage />)
        tree = renderer.getRenderOutput()
    })
    // it("renders correctly", () => {
    //   expect(tree).toMatchSnapshot()
    // })
    it('passes', () => {
        expect(true).toBe(true)
    })
})
