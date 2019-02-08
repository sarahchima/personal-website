import React from 'react'
import Navbar from './navbar'
// import Footer from './footer'

import './layout.css'


const Layout = ( {children} ) => (
    <main className="container">
        <Navbar />
        {children}
    </main>
)

export default Layout