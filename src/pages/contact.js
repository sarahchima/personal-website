import React from "react";
import Layout from "../components/layout";

import Footer from "../components/footer";
import SEO from "../components/seo";

import "../components/contact.css";

export default () => (
  <Layout>
    <SEO
      title={`Contact -`}
      keywords={[`Software Engineer`, `Fullstack`, `Developer`, `JavaScript`]}
    />
    <div className="cp">
      <div className="cp-row">
        <div className="cp-text">
          <article className="cp-article">
            <h1 className="cp-header">Want to work with me?</h1>
            {/* <p>
              I am well versed in client-side technologies, HTML, CSS,
              JavaScript and React. I am also familiar with some server-side
              frameworks like Laravel and Grails. I have built many user
              interfaces that no UI will be too hard for me to build. I strongly
              believe that all websites should be responsive and accessible to
              all. I also write technical articles on Frontend development.
              My current stack includes React, Typescript, Nodejs, GraphQL,
              Postgres, Docker, Kubernetes
            </p> */}

            <p>
              Looking for an experienced software developer to join your team?
              You can{" "}
              <a href="mailto:sarahchimao@gmail.com" className="link">
                <strong>send me an email</strong>
              </a>{" "}
              or send a message via the form. Please give necessary details
              about you or your project in your message. I will reply as soon as
              possible.{" "}
            </p>
          </article>

          <article className="cp-article cp-article-others">
            <h2>Other Relevant Links</h2>

            <div className="cp-icons">
              <a href="https://www.instagram.com/sarah_codes_/">
                <i class="fa fa-instagram" title="sarah chima's instagram"></i>
              </a>
              <a href="https://codepen.io/sayrah901">
                <i class="fa fa-codepen" title="sarah chima's codepen"></i>
              </a>
              <a href="https://twitter.com/sarah_chima">
                <i class="fa fa-twitter" title="sarah chima's twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/sarah-chima">
                <i class="fa fa-linkedin" title="sarah chima's linkedin"></i>
              </a>
              <a href="https://github.com/sarahchima">
                <i class="fa fa-github" title="sarah chima's github"></i>
              </a>
              <a href="https://dev.to/sarah_chima">
                <i class="fab fa-dev" title="sarah_chima's DEV Profile"></i>
              </a>
            </div>
          </article>
        </div>
        <div>
          <div className="cp-form">
            <form
              action="https://formspree.io/sarahchimao@gmail.com"
              method="POST"
              id="contact-form"
            >
              <label for="name" className="cp-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="contact-name"
                className="cp-input"
                required
              />

              <label for="email" className="cp-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="contact-email"
                className="cp-input"
                required
              />

              <label for="message" className="cp-label">
                Your Message
              </label>
              <textarea
                placeholder="Enter a message"
                name="message"
                id="contact-message"
                className="cp-textarea"
                required
              ></textarea>

              <button type="submit" className="cp-button">
                Email Me
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Layout>
);
