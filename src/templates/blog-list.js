import React from 'react'
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"

import SEO from '../components/seo'
import Layout from '../components/layout'
import Footer from '../components/footer'

import '../components/blog.css'


export default ({ pageContext, data }) => {
    const {currentPage, numOfPages} = pageContext;
    const posts = data.allMarkdownRemark.edges;
    const tags = data.allMarkdownRemark.group;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numOfPages;
    const prevPage = currentPage - 1 === 1 ? "/blog/" : "/blog/" + (currentPage - 1)
    const nextPage = "/blog/" + (currentPage + 1)

    return (
        <Layout>
            <SEO 
                title={`Articles - `}
                keywords={[`blog`, `gatsby`, `javascript`, `react`, `css`]}
            />
            <h1 className="a-header">The Articles </h1>
            <div className="a-main">
               <div className="a-articles">
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

                    <form action="https://sarahchima.us7.list-manage.com/subscribe/post?u=debf652409e37dd948f33287d&amp;id=53e01a2619" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="a-form validate" target="_blank" noValidate>
                        <p className="ab-side-text">Be the first to know when I publish a new article. Fill the form below. I promise not to spam.</p>
                        <div>
                            <label  for="mce-FNAME" style={{position: "absolute", left: "-5000px"}}>Name</label>
                            <input type="text" name="FNAME" class="ab-side-input a-form-input" id="mce-FNAME" placeholder="First Name"/>
                            
                            <label for="mce-EMAIL"style={{position: "absolute", left: "-5000px"}}>Email</label>
                            <input type="email" name="EMAIL" id="mce-EMAIL" className="ab-side-input required email a-form-input" placeholder="Email Address" required/>
                            <input type="hidden" value="1" name="embed" />
                            <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_debf652409e37dd948f33287d_53e01a2619" tabIndex="-1" value="" /></div>
                            <input type="submit" value="Subscribe" name="subscribe" class="ab-side-input a-form-submit"/>
                            <div id="mce-responses" class="clear">
                                <div class="response" id="mce-error-response" style={{display:"none"}}></div>
                                <div class="response" id="mce-success-response" style={{display:"none"}}></div>
                            </div> 
                        </div>
                    </form>

                    <ul className="a-pagination">
                        {!isFirst && (
                            <li>
                                <Link to={prevPage} rel="prev" className="flex-center">
                                ← Newer
                                </Link>
                            </li>
                        )}
                        <li> Page {currentPage} of {numOfPages} </li>

                        {!isLast && (
                            <li>
                                <Link to={nextPage} rel="prev" className="flex-center">
                                → Older
                                </Link>
                            </li>
                        )}
                    </ul>



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


export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int! ){
    site {
        siteMetadata {
          title 
        }
    }
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: $limit 
        skip: $skip 
        ) {
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