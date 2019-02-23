import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import Footer from '../components/footer'
import SEO from '../components/seo'

import '../components/blog.css'

export default ({ data }) => {
	const post = data.markdownRemark
	const {title, date, tags } = post.frontmatter;
	const keywords = tags.map(tag => tag);

    return (
      <Layout>
		    <SEO 
				title={title + " - "}
				keywords={keywords}
        	/>
			<div className="ab">
				<div className="ab-content">
					<div className="ab-heading">
						<h1 className="ab-title">{title}</h1>
						<p className="ab-frontmatter">
							<time>{date}</time> |
							<span className="a-article-tags">{tags.map(tag => (
								<Link to={`/tags/${tag}`} className="a-tag-link" key={tag} ><span className="a-article-tag"> ● {tag} </span></Link>
							))}</span>
						</p>
					</div>
					<div dangerouslySetInnerHTML={{ __html: post.html }} />
				</div>
				<aside>
					<div className="ab-side">
						<p className="ab-side-text">Be the first to know when I publish a new article. Fill the form below. I promise not to spam.</p>
						<form action="https://sarahchima.us7.list-manage.com/subscribe/post?u=debf652409e37dd948f33287d&amp;id=53e01a2619" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
							<p><input type="text" name="FNAME" class="ab-side-input" id="mce-FNAME" placeholder="First Name"/></p>
							<p><input type="email" name="EMAIL" id="mce-EMAIL" className="ab-side-input required email" placeholder="Email Address" required/></p>
							<input type="hidden" value="1" name="embed" />
							<div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_debf652409e37dd948f33287d_53e01a2619" tabIndex="-1" /></div>
							<input type="submit" value="Subscribe" name="subscribe" className="ab-side-input"/>
						</form>
						<div id="mce-responses" className="clear">
							<div className="response" id="mce-error-response" style={{display:"none"}}></div>
							<div className="response" id="mce-success-response" style={{display:"none"}}></div>
						</div>   
					</div>
				</aside>
			</div>

			<Link to={"/blog"} className="articles-link">← All Articles </Link>
			<Footer />
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
        tags
      }
    }
  }
`

