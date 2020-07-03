import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import BlogPage from '.'

describe('Blog', () => {
    const renderer = ShallowRenderer.createRenderer()
    let tree

    beforeEach(() => {
        renderer.render(<BlogPage />)
        tree = renderer.getRenderOutput()
    })

    it('renders correctly', () => {
        expect(tree).toMatchSnapshot()
    })

    it('passes', () => {
        expect(true).toBe(true)
    })
})
