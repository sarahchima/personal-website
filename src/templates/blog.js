import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import Footer from '../components/footer'


export default ({ data }) => {
	const post = data.markdownRemark
	const tag = post.frontmatter.tags[0];
    return (
        <Layout>
			<div className="ab">
				<div className="ab-content">
					<div className="ab-heading">
						<h1 className="ab-title">{post.frontmatter.title}</h1>
						<p className="ab-frontmatter">
							<time>{post.frontmatter.date}</time> |
							<span className="a-article-tags">{post.frontmatter.tags.map(tag => (
								<Link to={`/tags/${tag}`} className="a-tag-link" key={tag} ><span className="a-article-tag"> ● {tag} </span></Link>
							))}</span>
						</p>
					</div>
					<div dangerouslySetInnerHTML={{ __html: post.html }} />
				</div>
				<aside>
					<div className="ab-side">
						<p className="ab-side-text">To get regular articles on Frontend development, fill the form below. I promise not to spam.</p>
						<form  action="https://tinyletter.com/sarahchima" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/sarahchima', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
							<p><input type="text" name="email" id="tlemail" placeholder="Enter your email address" className="ab-side-input" required/></p>
							<input type="hidden" value="1" name="embed"/>
							<input type="submit" value="Subscribe" className="ab-side-input" />
						</form>
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