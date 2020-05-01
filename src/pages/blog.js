import React from 'react'

import Layout from '../layout'
import SEO from '../layout'
import BlogPage from '../features/blog-page'

const Blog = () => {
  return (
    <Layout>
      <SEO pageTitle="Blog" />
      <BlogPage />
    </Layout>
  )
}

export default Blog