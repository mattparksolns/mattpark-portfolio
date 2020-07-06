import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import { PureContactInfo } from './contact-info'

const renderer = ShallowRenderer.createRenderer()

describe('ContactInfo', () => {
    let tree
    const data = {
        site: {
            siteMetadata: {
                author: {
                    name: 'Matt Park',
                    email: 'mattparksolns@gmail.com',
                    phone_number: '+2015913323',
                },
            },
        },
    }

    beforeEach(() => {
        renderer.render(<PureContactInfo data={data} />)
        tree = renderer.getRenderOutput()
    })

    it('renders correctly', () => {
        expect(tree).toMatchSnapshot()
    })

    it('passes', () => {
        expect(true).toBe(true)
    })
})
