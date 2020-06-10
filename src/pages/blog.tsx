import React from 'react'
import PropTypes, { InferProps } from 'prop-types'

import BlogPage from '../page-components/blog-page'
import SEO from '../features/seo'

const Blog = ({
  location
}: InferProps<typeof Blog.propTypes>) => (
  <>
    <SEO pageTitle="Blog" />
    <BlogPage location={location} />
  </>
)
Blog.propTypes = {
  location: PropTypes.object.isRequired,
}
export default Blog
