exports.onCreateWebpackConfig = ({ getConfig, stage, loaders, actions }) => {
    const config = getConfig()
    if (stage.startsWith('develop') && config.resolve) {
        config.resolve.alias = {
            ...config.resolve.alias,
            'react-dom': '@hot-loader/react-dom',
        }
    } else if (stage === 'build-html') {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /bad-module/,
                        use: loaders.null(),
                    },
                ],
            },
        })
    }
}

const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/blog-post.jsx`)
    const result = await graphql(`
        {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                            date
                        }
                    }
                }
            }
        }
    `)
    if (result.errors) {
        throw result.errors
    }
    if (!result.data) {
        throw new Error('Error: Could not fetch posts on build.')
    }
    const posts = result.data.allMarkdownRemark.edges || []
    posts.forEach(({ node }, index) => {
        const previous = index === posts.length - 1 ? undefined : posts[index + 1].node
        const next = index === 0 ? undefined : posts[index - 1].node
        createPage({
            path: `${node.fields.slug}`,
            component: blogPostTemplate,
            context: {
                slug: node.fields.slug,
                previous,
                next,
                // Add optional context data to be inserted
                // as props into the page component...
                //
                // The context data can also be used as
                // arguments to the page GraphQL query.
                //
                // The page "path" is always available as a GraphQL
                // argument.
            },
        })
    })
}

const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}
