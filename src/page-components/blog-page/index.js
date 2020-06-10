import React from 'react'
import { Box, Typography } from '@material-ui/core'

const BlogPage = ({ data, location }) => {
  return (
    <Box className={`contentWrapper`}>
      <Typography variant="h2">My Blog</Typography>
      <Typography variant="body1">
        Work in progress..
      </Typography>
    </Box>
  )
}
export default BlogPage
