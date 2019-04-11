import React from 'react'

import Layout from '../components/layout'
import Footer from '../components/footer'
import SEO from '../components/seo'

import Hng from '../images/hng.png'
import Factory from '../images/factory.png'
import Timbu from '../images/timbu-admissions.png'
import '../components/projects.css'


export default () => (
    <Layout>
        <SEO 
            title={`Projects - `}
            keywords={["JavaScript", "HTML", "React", "CSS", "Laravel"]}
        />
        <section className="section projects-main" id="projects" >
            <header className="projects-header">
                <h1 className="">Major Projects</h1>
                <p>These are some large scale projects I have worked on with awesome teammates.</p>
            </header>
            <div className="projects-main-row" >
                <article className="projects-article">
                    <h3 className="projects-article-header"><a href="https://hotels.ng">Hotels.ng</a></h3>
                    <p>Hotels.ng is Nigeria's number 1 Hotel Booking Portal. As a Frontend developer, I built over 70% of the user interface of the version 7 of the website. I improved the <strong class="highlight">accessibility</strong> of the site and ensured it is both <strong class="highlight">responsive</strong> and <strong class="highlight">cross-browser compatible</strong> (Opera Mini included 😉). </p>
                    <p className="projects-tech"><strong>Tech used: <span class="html">HTML</span>, <span class="scss">SCSS</span>, <span class="javascript">JavaScript</span></strong></p>
                </article>

                <div className=" projects-image projects-image3">
                    <div className="box-animation ">
                        <img class="header-img" alt="" src={Hng} />
                    </div>
                </div>


            </div>
            <div class="projects-main-row">
                <article className="projects-article project-study">
                    <h3 className="projects-article-header"><a href="https://timbu.com/study">Timbu Admissions</a></h3>
                    <p>Timbu Admissions serves to help people get guided assistance to start graduate programs in other countries. I built this website using Frontend technologies, Laravel and Rest APIs to integrate the payment gateway.</p>
                    <p className="projects-tech"><strong>Tech used: <span class="html">HTML</span>, <span class="scss">SCSS</span>, <span class="javascript">JavaScript</span>, <span class="laravel">Laravel</span></strong></p>
                </article>
                <div class=" projects-image projects-image3">
                    <div className="box-animation ">
                        <img className="header-img" alt="" src={Timbu} />
                    </div>
                </div>
            </div>
            <div class="row projects-main-row">
                <article className="projects-article project-factory">
                    <h3 className="projects-article-header">Factory</h3>
                    <p>Factory is a performance management tool. I contributed to several parts of the UI of the tool and built most external pages.</p>
                    <p className="projects-tech"><strong>Tech used: <span class="html">HTML</span>, <span class="scss">SCSS</span>, <span class="javascript">JavaScript</span>, <span class="bootstrap">Bootstrap</span></strong></p>
                </article>
                <div className=" projects-image projects-image3">
                    <div className="box-animation ">
                        <img className="header-img" alt="" src={Factory} />
                    </div>
                </div>
            </div>

            <div className="projects-sec-header">
                <h2 className="text-center">Experiments and Open Source</h2>
                <p class="text-center">Other smaller projects I have built.</p>
            </div>
            <div class="projects-sec-container">
                <div>
                    <picture class="project-sec ">
                        <img class="header-img" alt="" src="https://res.cloudinary.com/dvj2hbywq/image/upload/c_scale,h_646,w_778/v1532919673/personal-webiste/pomodoro.png" />
                    </picture>
                    <h3><a href="https://codepen.io/sayrah901/full/vgZJMa/">Pomodoro Clock</a></h3>
                    <p>A Freecodecamp project based on the Pomodoro principle.</p>
                    <p><strong>Tech used:</strong> JavaScript, JQuery, HTML/CSS</p>
                </div>
                <div>
                    <picture class="project-sec">
                        <img class="header-img" alt="" src="https://res.cloudinary.com/dvj2hbywq/image/upload/c_scale,w_778/v1532919664/personal-webiste/clock.png" />
                    </picture>
                    <h3><a href="https://codepen.io/sayrah901/full/dzQVmx/">Animated Clock</a></h3>
                    <p>I played with CSS animation and this was the result.</p>
                    <p><strong>Tech used:</strong> CSS, JQuery</p>
                </div>
                <div>
                    <picture class="project-sec">
                        <img class="header-img" alt="" src="https://res.cloudinary.com/dvj2hbywq/image/upload/c_scale,h_646,w_778/v1532920306/Screen_Shot_2018-07-30_at_4.09.46_AM_t5zay1.png" />
                    </picture>
                    <h3><a href="https://codepen.io/sayrah901/full/eGXvzz/">Tag It</a></h3>
                    <p>I wrote several articles on React and decided to build this simple tag adder tool to demostrate how to build a React app. </p>
                    <p><strong>Tech used:</strong> React</p>
                </div>  
                           
            </div>
        </section>
        <Footer />

    </Layout>
)