import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import WorkPage from '.'

describe('WorkPage', () => {
    const renderer = ShallowRenderer.createRenderer()
    let tree

    beforeEach(() => {
        renderer.render(<WorkPage />)
        tree = renderer.getRenderOutput()
    })

    it('renders correctly', () => {
        expect(tree).toMatchSnapshot()
    })

    it('passes', () => {
        expect(true).toBe(true)
    })
})
