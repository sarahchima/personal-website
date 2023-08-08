import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Potrait from "../images/potrait2.jpg";

export default () => (
  <Layout>
    <SEO
      title={` `}
      keywords={[`Software Engineer`, `UI`, `Developer`, `CSS`, `JavaScript`]}
      description={`Welcome to Sarah Chima Atuonwu's website`}
    />
    <div className="ap">
      <picture className="ap-picture">
        <img className="ap-img" src={Potrait} alt="Sarah" />
      </picture>
      <article className="ap-text">
        <h1 className="ap-header">Hi, I'm Sarah.</h1>
        <p>
          I am a <strong>Software Engineer</strong> based in Stockholm with 5+
          years of experience building tech products.{" "}
        </p>
        <p>
          I love sharing what I learn so I write on my{" "}
          <Link to={`/blog`} className="bold">
            {" "}
            blog
          </Link>
          ,
          <Link
            to={`https://blog.logrocket.com/author/sarahchima/`}
            className="bold"
          >
            {" "}
            logrocket
          </Link>{" "}
          or on{" "}
          <a href="https://www.instagram.com/sarah_codes_/" className="bold">
            Instagram
          </a>
          . These articles cover a wide range of topics including React, ES6,
          CSS, and SASS.
        </p>
      </article>
    </div>
  </Layout>
);
