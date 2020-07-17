import React from 'react'
import { Typography } from '@material-ui/core'

import SEO from '../components/seo'

const NotFoundPage = () => {
    return (
        <>
            <SEO pageTitle={'404: Not found'} />
            <div className={`contentWrapper`}>
                <Typography variant={'h2'} component={'p'}>
                    404 NOT FOUND
                </Typography>
                <Typography variant={'h6'}>You just hit a route that doesn&#39;t exist...</Typography>
            </div>
        </>
    )
}
export default NotFoundPage
