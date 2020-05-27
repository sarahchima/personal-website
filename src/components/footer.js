import React from 'react'

export default () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p><strong>© 2018 - {currentYear} Sarah Chima. All Right Reserved.</strong></p>
            <p>This site is built with Gatsby and hosted on Netlify</p>
        </footer>
)}