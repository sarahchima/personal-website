import React from "react"
import Layout from '../components/layout'

import Potrait from '../images/potrait2.jpg'

export default () => (
    <Layout>
        <div className="ap">
            <picture className="ap-picture">
                <img class="ap-img" src={Potrait} alt="" />
            </picture> 
            <article class="ap-text">
                <h1 class="ap-header">Hi, I'm Sarah.</h1>
                <p>I am a <strong>Frontend Engineer</strong> from Nigeria. I am well versed in client-side technologies, HTML, CSS, and JavaScript. I have built many UI designs and I always pay close attention to the details of a design. I know CSS so well that no interface will be too hard for me to build.  </p>
                <p>I am a strong advocate of responsive and accessible websites and I endeavor to build web pages that are both responsive and accessible. I use SASS to keep my CSS maintainable and modular.  I have also built web pages and applications with React and Redux. I understand how REST APIs work and I have built several applications with it. </p>
                <p>When I am not coding, I write technical articles on dev.to. These articles cover a wide range of Front-end topics including React, ES6, CSS, and SASS. Recently, my article was one of the top seven articles of the week on dev.to. I also love designing user interfaces with Figma and applying principles of UX.</p>
            </article>


        </div>
    </Layout>
)
