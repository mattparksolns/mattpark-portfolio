import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import ContactInfo from './contact-info'

describe('ContactInfo', () => {
    const renderer = ShallowRenderer.createRenderer()
    let tree

    beforeEach(() => {
        renderer.render(<ContactInfo />)
        tree = renderer.getRenderOutput()
    })

    it('renders correctly', () => {
        expect(tree).toMatchSnapshot()
    })

    it('passes', () => {
        expect(true).toBe(true)
    })
})
