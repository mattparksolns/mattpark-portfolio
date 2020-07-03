import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import AboutPage from '.'

describe('AboutPage', () => {
    const renderer = ShallowRenderer.createRenderer()
    let tree

    beforeEach(() => {
        renderer.render(<AboutPage />)
        tree = renderer.getRenderOutput()
    })

    it('renders correctly', () => {
        expect(tree).toMatchSnapshot()
    })

    it('passes', () => {
        expect(true).toBe(true)
    })
})
