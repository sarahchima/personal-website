import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"

import Layout from "../components/layout"
import Footer from '../components/footer'
import SEO from '../components/seo'

import '../components/blog.css'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges } = data.allMarkdownRemark
  const tags = data.allMarkdownRemark.group

  return (
    <Layout>
		<SEO 
			title={`${tag} - `}
			keywords={`${tag}`}
		/>
      <div className="at">
        <h1 className="a-header">#{tag}</h1>
		<div className="a-main">
			<div className="a-articles">
				{/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
				{edges.map(({ node }) => {
					const { title, description, date, tags } = node.frontmatter
					const { slug } = node.fields

					return (
            <div className="a-article" key={node.id}>
                <time className="a-article-date">{date}</time>
                <Link to={slug}><h2 className="a-article-title">{title}</h2></Link>
                <p>{description}</p>
                <p className="a-article-tags">{tags.map(tag => (
                    <Link to={`/tags/${tag}`}><span key={tag} className="a-article-tag">#{tag} </span></Link>
                ))}</p>

            </div>
					)
				} )}
				
			</div>
			<div className="a-tags">
				<h2 className="a-tags-title">Related Tags</h2>
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
		<Link to={"/blog"} className="articles-link">← All Articles </Link>
      </div>
	  <Footer />
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
			node {
            frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                tags
                description
            }
			fields {
				slug
			}

			}
		 }
		group(field: frontmatter___tags) {
            fieldValue
            totalCount
        }
	}
	
  }
`