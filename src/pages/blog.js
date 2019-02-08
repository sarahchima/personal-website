import React from 'react'
import { Link, graphql } from "gatsby"

import kebabCase from "lodash/kebabCase"

import Layout from '../components/layout'
import Footer from '../components/footer'

import '../components/blog.css'


export default ({ data }) => {
    const posts = data.allMarkdownRemark.edges
    const tags = data.allMarkdownRemark.group
    return (
        <Layout>
            <h1 className="a-header">The Articles </h1>
            <div className="a-main">
               <div className="a-articles">
                    {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
                    {posts.map(({node}) => (
                        <div className="a-article" key={node.id}>
                            <time className="a-article-date">{node.frontmatter.date}</time>
                            <Link to={node.fields.slug}><h2 className="a-article-title">{node.frontmatter.title}</h2></Link>
                            <p>{node.frontmatter.description}</p>
                            <p className="a-article-tags">{node.frontmatter.tags.map(tag => (
                                <Link to={`/tags/${tag}`}><span key={tag} className="a-article-tag">#{tag} </span></Link>
                            ))}</p>

                        </div>
                        )
                    )}
                </div>
                <div className="a-tags">
                    <h2 class="a-tags-title">Topics</h2>
                    <ul className="a-tags-list">
                        {tags.map(tag => (
                        <li key={tag.fieldValue} className="a-tags-tag">
                            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                            {tag.fieldValue} <small>({tag.totalCount})</small>
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />
        </Layout>
    )
}


export const query = graphql`
  query {
    site {
        siteMetadata {
          title
        }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
            node {
            id
            frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                tags
                description
            }
            fields {
                slug
            }
            excerpt
            }
        }
        group(field: frontmatter___tags) {
            fieldValue
            totalCount
        }
    }
  }
`