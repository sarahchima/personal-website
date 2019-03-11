import React from "react"
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Potrait from '../images/potrait2.jpg'

export default (props) => (
    <Layout>
        <SEO 
            title={` `}
            keywords={[`Front-End Engineer`, `UI`, `Developer`, `CSS`, `JavaScript`]}
            description={`Welcome to Sarah Chima's website`}
        />
        <div className="ap">
            <picture className="ap-picture">
                <Img fixed={props.data.potrait.childImageSharp.fixed}  alt="Sarah" />
            </picture> 
            <article className="ap-text">
                <h1 className="ap-header">Hi, I'm Sarah.</h1>
                <p>I am a <strong>Front-End Developer</strong> from Nigeria. I am a strong advocate of responsive and accessible websites. I love challenges and I believe facing new challenges is the best way to grow as an Engineer.</p>
                <p>When I am not coding, I write blog posts on my <Link to={`/blog`} className="bold"> blog </Link> or on <a href="https://www.instagram.com/sarah_codes_/" className="bold">Instagram</a>. These articles cover a wide range of Frontend topics including React, ES6, CSS, and SASS. I love designing user interfaces with Figma and applying principles of UX.</p>
                <p>I also love cooking, listening to good music and sharing the good news with people.</p>
            </article>
        </div>
    </Layout>
)

export const query = graphql`
  query {
    potrait : file(relativePath: { eq: "potrait2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`