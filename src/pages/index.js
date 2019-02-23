import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Potrait from '../images/potrait2.jpg'

export default () => (
    <Layout>
        <SEO 
            title={` `}
            keywords={[`Front-End Engineer`, `UI`, `Developer`, `CSS`, `JavaScript`]}
            description={`Welcome to Sarah Chima's website`}
        />
        <div className="ap">
            <picture className="ap-picture">
                <img className="ap-img" src={Potrait} alt="Sarah" />
            </picture> 
            <article className="ap-text">
                <h1 className="ap-header">Hi, I'm Sarah.</h1>
                <p>I am a <strong>Frontend Developer</strong> from Nigeria. I am a strong advocate of responsive and accessible websites. I love challenges and I believe facing new challenges is the best way to grow as an Engineer.</p>
                <p>When I am not coding, I write blog posts on my <Link to={`/blog`} className="bold"> blog </Link> or on <a href="https://www.instagram.com/sarah_codes_/" className="bold">Instagram</a>. These articles cover a wide range of Frontend topics including React, ES6, CSS, and SASS. I love designing user interfaces with Figma and applying principles of UX.</p>
                <p>I also love cooking, listening to good music and sharing the good news with people.</p>
            </article>
        </div>
    </Layout>
)
