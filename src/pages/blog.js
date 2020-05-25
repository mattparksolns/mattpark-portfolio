import React from 'react'

import BlogPage from '../page-components/blog-page'
import SEO from '../features/seo'

const Blog = ({ location }) => (
  <>
    <SEO pageTitle="Blog" />
    <BlogPage location={location} />
  </>
)
export default Blog
