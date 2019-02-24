import React from 'react'
import Navbar from './navbar'
import SEO from '../components/seo'
import './layout.css'
import 'prismjs/themes/prism-solarizedlight.css'

const Layout = ( {children} ) => (
    <div>
        <SEO 
            title={`Sarah Chima`}
            lang={`en`}
        />
        <main className="container">
            <Navbar />
            {children}
        </main>
    </div>
)

export default Layout