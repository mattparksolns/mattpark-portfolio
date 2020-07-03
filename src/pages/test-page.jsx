import React from 'react'
import { Typography } from '@material-ui/core'

import SEO from '../components/seo'

const TestPage = () => {
    return (
        <>
            <SEO pageTitle="TestPage" />
            <Typography variant="h1">Test Page</Typography>
            <Typography variant="h2">testing shit...</Typography>
        </>
    )
}
export default TestPage
