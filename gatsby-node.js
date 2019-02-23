
const path = require(`path`)
const _ = require("lodash")


const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    const blogPostTemplate = path.resolve("src/templates/blog.js");
    const tagTemplate = path.resolve("src/templates/tags.js");
    const blogListTemplate = path.resolve('src/templates/blog-list.js');
  
  
    return new Promise((resolve, reject) => {
      graphql(`
        {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                    tags
                }
              }
            }
          }
        }
      `
  ).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges;

        posts.forEach(({ node }) => {
            createPage({
            path: node.fields.slug,
            component: blogPostTemplate,
            context: {
                slug: node.fields.slug,
                },
            })
        })

        //Pagination
        const postPerPages = 6;
        const numOfPages = Math.ceil(posts.length / postPerPages);

        Array.from({ length: numOfPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `blog` : `blog/${i + 1}`,
            component: blogListTemplate,
            context: {
              limit: postPerPages,
              skip: i * numOfPages,
              numOfPages,
              currentPage: i + 1
            }

          })
        })

         // Tag pages:
        let tags = []
        // Iterate through each post, putting all found tags into `tags`
        _.each(posts, edge => {
            if (_.get(edge, "node.frontmatter.tags")) {
                tags = tags.concat(edge.node.frontmatter.tags)
            }
        })
        // Eliminate duplicate tags
        tags = _.uniq(tags)

        // Make tag pages
        tags.forEach(tag => {
            createPage({
                path: `/tags/${_.kebabCase(tag)}/`,
                component: tagTemplate,
                context: {
                    tag,
                },
            })
        })

        resolve()
      })
    })
  }